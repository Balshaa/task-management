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
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  projectId: string;
  createdAt: string;
  createdBy: string;
}
interface FormData {
  title: string;
  description: string;
  isActive: boolean;
}
interface ProjectEditProps {
  id: string | null;
  handleCloseModal: () => void;
}
const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    isActive: yup.boolean().required(),
  })
  .required();

const ProjectEdit = ({ id, handleCloseModal }: ProjectEditProps) => {
  const [project, setProject] = useState<FormData | null>(null);
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
    const fetchProjectInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(
          `https://task-management-opll.onrender.com/api/projects/get-project/${id}`,
          config
        );
        console.log(res.data);
        setProject(res.data);
        setValue("title", res.data.title);
        setValue("description", res.data.description);
        setValue("isActive", res.data.isActive);
      } catch (err) {
        console.log(err);
      }
    };

    if (id) {
      fetchProjectInfo();
    }
  }, [id]);
  if (!project) {
    return <div>Loading...</div>;
  }

  console.log(project);
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const token = localStorage.getItem("accessToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const updatedData = {
        title: data.title,
        description: data.description,
        isActive: data.isActive,
        id: id,
      };

      const res = await axios.put(
        `https://task-management-opll.onrender.com/api/projects/update-project`,
        updatedData,
        config
      );
      // Handle the response as needed
      console.log(res);
      Swal.fire(
        "Updated!",
        "You have successfully updated project.",
        "success"
      );
      handleCloseModal();
      console.log(res); // Log the updated form data here
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(watch("title")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset variant="filled">
          <div className="flex flex-col">
            <TextInput
              label="Title"
              placeholder="Title"
              {...register("title")}
            />
            <p className="text-red-500">{errors.title?.message}</p>
          </div>
          <div className="flex flex-col">
            <Textarea
              label="Description"
              placeholder="Edit Description"
              {...register("description")}
            />
            <p className="text-red-500">{errors.description?.message}</p>
          </div>
          <select {...register("isActive")}>
            <option value="">Activation</option>
            <option value={true.toString()}>Active</option>
            <option value={false.toString()}>Inactive</option>
          </select>

          <Group justify="flex-end" mt="md">
            <Button type="submit">Submit</Button>
          </Group>
        </Fieldset>
      </form>
    </div>
  );
};

export default ProjectEdit;
