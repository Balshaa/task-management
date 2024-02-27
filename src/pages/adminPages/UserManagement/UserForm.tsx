import { Button, Fieldset, Group, NumberInput, Select, TextInput } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  FirstName: string;
  LastName: string;
  Email: string;
  PhoneNumber: number;
 
}

const schema = yup
  .object({
    FirstName: yup.string().required(),
    LastName: yup.string().required(),
    Email: yup.string().email().required(),
    PhoneNumber: yup.number().typeError("Valid Phone is required").positive().integer().required("Valid Phone is required"),
  })
  .required();

const UserForm = () => {
  const inputClass = `bg-gray-500 text-green font-bold`;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  console.log(watch("FirstName")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset variant="filled">
          <Group justify="flex">
            <div className="flex flex-col">
            <TextInput
              label="First Name"
              placeholder="First Name"
             
              {...register("FirstName")} />
              <p className="text-red-500">{errors.FirstName?.message}</p>
              </div>
              <div className="flex flex-col">
            <TextInput label="Last Name" placeholder="Last Name"
            {...register("LastName")} />
            <p className="text-red-500">{errors.LastName?.message}</p>
            </div>
            </Group>
          <Group justify="flex">
          <div className="flex flex-col">
            <TextInput label="Email" placeholder="Email" mt="md" 
            {...register("Email")} />
            <p className="text-red-500">{errors.Email?.message}</p>
            </div>
            <div className="flex flex-col">
            <TextInput
              label="Phone Number"
              placeholder="Phone Number"
              {...register("PhoneNumber")} />
              <p className="text-red-500">{errors.PhoneNumber?.message}</p>
              </div>
          </Group>
          <Select
            label="Role"
            placeholder="Pick role"
            data={["Front_end developer", "Back_end  Developer", "Tester", "Other"]}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </Fieldset>
      </form>
    </div>
  );
};

export default UserForm;
