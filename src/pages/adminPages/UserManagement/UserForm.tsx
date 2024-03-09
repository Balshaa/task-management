import {
  Button,
  Fieldset,
  Group,
  TextInput,
  rem,
} from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object } from "yup";
import axios from "axios";
import Swal from 'sweetalert2'
import { useDisclosure } from '@mantine/hooks';

enum Gender {
  male = "male",
  female = "female",
}

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  gender: Gender;
  jobTitle: string;
  password: string;
}
interface UserFormProps{
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
  password: string().required(),
}).required();

const UserForm = ({handleCloseModal}: UserFormProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };


      
      const res = await axios.post(
        "https://task-management-opll.onrender.com/api/users/create-user",
        data,
        config
      );
      // Handle the response as needed
      console.log(res)
      Swal.fire("Registered!", "You have been sucessfully register User.", "success");
      handleCloseModal();
    } catch (err) {
      console.log(err);
    }
    console.log(data);
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
                <option value={Gender.female}>female</option>
                <option value={Gender.male}>male</option>
              </select>
              <p className="text-red-500">{errors.gender?.message}</p>
            </div>
          </Group>
          <Group justify="flex">
            <div className="flex flex-col">
              <select {...register("jobTitle")}>
                <option value="Front_end developer">Front-end developer</option>
                <option value="Back_end Developer">Back-end Developer</option>
                <option value="Tester">Tester</option>
              </select>
              <p className="text-red-500">{errors.jobTitle?.message}</p>
            </div>
            <div className="flex flex-col">
              <TextInput
                label="password"
                placeholder="Password"
                {...register("password")}
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>
          </Group>
          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </Fieldset>
      </form>
    </div>
  );
};

export default UserForm;
