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
import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  role: string;
  jobTitle: string;
  isAdmin: boolean;
}

interface FormData {
  title: string;
  description: string;
  assigneeId: string;
  priority: string;
}

interface TaskFormProps {
  id: string | null;
  handleCloseModal: () => void;
}
const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    assigneeId: yup.string().required(),
    priority: yup.string().required(),
  })
  .required();

const TaskForm = ({ id, handleCloseModal }: TaskFormProps) => {
  const [users, setUsers] = useState<User[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(
          "https://task-management-opll.onrender.com/api/users/get-users",
          config
        );
        setUsers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllUsers();
  }, []);

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
        projectId: { id },
        status: "todo",
      };

      const res = await axios.post(
        "https://task-management-opll.onrender.com/api/tasks/create-task",
        apiData,
        config
      );
      // Handle the response as needed
      console.log(res);
      Swal.fire(
        "Task Added!",
        "You have been successfully Added Task.",
        "success"
      );
      handleCloseModal();
    } catch (err) {
      console.log(err);
    }
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset variant="filled">
          <Group justify="flex">
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
                placeholder="Description"
                {...register("description")}
              />
              <p className="text-red-500">{errors.description?.message}</p>
            </div>
          </Group>
          <Group justify="flex">
            <div className="mt-2 flex gap-3">
              <div className="flex flex-col">
                <select {...register("assigneeId")}>
                  <option value="" hidden>
                    Assign to
                  </option>
                  {users.map((user: User) => (
                    <option key={user.id} value={user.id}>
                      {user.name} 
                    </option>
                  ))}
                </select>
              </div>
              <select {...register("priority")}>
                <option value="" hidden>
                  Choose Priority
                </option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </Group>
          <Group justify="flex-end" mt="md">
            <Button onClick={handleCloseModal} type="submit">
              Submit
            </Button>
          </Group>
        </Fieldset>
      </form>
    </div>
  );
};

export default TaskForm;
