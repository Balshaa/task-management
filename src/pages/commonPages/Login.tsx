import { Button, Fieldset, Group, NumberInput, PasswordInput, Select, TextInput } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
 
  Email: string;
  Password: string;
 
}

const schema = yup
  .object({
    Email: yup.string().email().required(),
    Password: yup.string().required('Password is required'),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  console.log(watch("Email")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset variant="filled">
          <div className="flex flex-col">
            <TextInput label="Email" placeholder="Email" mt="md" autoFocus
            {...register("Email")} />
            <p className="text-red-500">{errors.Email?.message}</p>
            </div>
            <div className="flex flex-col">
            <PasswordInput
              label="Password"
              placeholder="Password"
              {...register("Password")} />
              <p className="text-red-500">{errors.Password?.message}</p>
              </div>

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </Fieldset>
      </form>
    </div>
  );
};

export default LoginForm;
