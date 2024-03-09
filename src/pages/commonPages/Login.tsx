import {
  Button,
  Fieldset,
  Group,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required("password is required"),
  })
  .required();

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  //const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    setIsLoading(true);
    axios
      .post("https://task-management-opll.onrender.com/api/auth/login", data)
      .then((res) => {
        const accessToken = res.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        console.log(accessToken);
        if (res) {
          if (res.data.profile.isAdmin) {
            navigate("/Admin");
          } else {
            navigate("/Developer");
          }
        }
        console.log(res);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  };

  //console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset variant="filled">
          <div className="flex flex-col">
            <TextInput
              label="email"
              placeholder="email"
              mt="md"
              autoFocus
              {...register("email")}
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            <PasswordInput
              label="password"
              placeholder="password"
              {...register("password")}
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
            {isLoading ? "Logging in..." : ""}
          </Group>
        </Fieldset>
      </form>
    </div>
  );
};

export default LoginForm;
