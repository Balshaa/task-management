import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Fieldset,
  Group,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import axios from "axios";
import Swal from "sweetalert2";

interface FormData {
  title: string;
  description: string;
}

interface ProjectFormProps {
  handleCloseModal: () => void;
}

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

const ProjectForm = ({ handleCloseModal }: ProjectFormProps) => {
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
      const apiData = {
        ...data,
        isActive: true,
      };

      const res = await axios.post(
        "https://task-management-opll.onrender.com/api/projects/create-project",
        apiData,
        config
      );
      // Handle the response as needed
      console.log(res);
      Swal.fire(
        "Registered!",
        "You have been sucessfully register Project.",
        "success"
      );
      handleCloseModal();
    } catch (err) {
      console.log(err);
    }
    console.log(data);
  };

  console.log(watch("title")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset variant="filled">
          <div className="flex flex-col">
            <TextInput
              label="title"
              placeholder="title"
              {...register("title")}
            />
            <p className="text-red-500">{errors.title?.message}</p>
          </div>
          <div className="flex flex-col">
            <Textarea
              label="description"
              placeholder="description"
              {...register("description")}
            />
            <p className="text-red-500">{errors.description?.message}</p>
          </div>
          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </Fieldset>
      </form>
    </div>
  );
};

export default ProjectForm;
