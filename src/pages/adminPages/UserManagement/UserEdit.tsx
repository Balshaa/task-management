import { Button, Fieldset, Group, TextInput, rem } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";

enum Gender {
  male = "male",
  female = "female",
}
interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  gender: Gender;
  jobTitle: string;
}
interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  gender: Gender;
  jobTitle: string;
}
interface UserEditProps {
  id: string | null;
  handleCloseModal: ()=>void
}

const schema = object({
  name: string().required(),
  email: string().email().required(),
  phoneNumber: string()
    .required("Phone number is required")
    .matches(
      /^\+251\d{9}$/,
      'Phone number must begin with "+251" and have a length of 12 digits'
    ),
  gender: string().oneOf(Object.values(Gender)).required("Gender is required"),
  jobTitle: string().required(),
}).required();

const UserEdit = ({ id, handleCloseModal }: UserEditProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchEditUser = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(
          `https://task-management-opll.onrender.com/api/users/get-user/${id}`,
          config
        );
        setUser(res.data);
        setValue('name', res.data.name);
          setValue('email', res.data.email);
          setValue('phoneNumber', res.data.phoneNumber);
          setValue('gender', res.data.gender);
          setValue('jobTitle', res.data.jobTitle);
      } catch (err) {
        console.log(err);
      }
    };

    if (id) {
      fetchEditUser();
    }
  }, [id]);
  if (!user) {
    return <div>Loading...</div>;
  }

  console.log(user);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      
      const updatedData = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
        jobTitle: data.jobTitle,
        id: user?.id,
        isActive: true,
      };
  
      const res = await axios.put(
        `https://task-management-opll.onrender.com/api/users/update-user`,
        updatedData,
        config
      );
      // Handle the response as needed
      console.log(res);
      Swal.fire(
        "Updated!",
        "You have successfully updated user.",
        "success"
      );
      handleCloseModal();
      console.log(res); // Log the updated form data here
    } catch (err) {
      console.log(err);
    }
  };

  //console.log(watch("name")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset variant="filled">
          <Group justify="flex">
            <div className="flex flex-col">
              <TextInput
                label="Name"
                placeholder="Name"
                {...register("name")}
              />
              <p className="text-red-500">{errors.name?.message}</p>
            </div>
            <div className="flex flex-col">
              <TextInput
                label="email"
                placeholder="email"
                mt="md"
                {...register("email")}
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
          </Group>
          <Group justify="flex">
            <div className="flex flex-col">
              <TextInput
                label="Phone Number"
                placeholder="Phone Number"
                {...register("phoneNumber")}
              />
              <p className="text-red-500">{errors.phoneNumber?.message}</p>
            </div>
            <div className="flex flex-col">
              <select {...register("gender")}>
              <option value="">Select Geneder</option>
                <option value={Gender.female}>female</option>
                <option value={Gender.male}>male</option>
              </select>
              <p className="text-red-500">{errors.gender?.message}</p>
            </div>
          </Group>
          <div className="m-3">
            <select {...register("jobTitle")}>
              <option value="">Select job title</option>
              <option value="Front_end developer">Front-end developer</option>
              <option value="Back_end Developer">Back-end Developer</option>
              <option value="Tester">Tester</option>
            </select>

            <p className="text-red-500">{errors.jobTitle?.message}</p>
          </div>

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </Fieldset>
      </form>
    </div>
  );
};

export default UserEdit;
