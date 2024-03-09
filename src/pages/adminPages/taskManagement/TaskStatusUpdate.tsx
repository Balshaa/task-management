import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Fieldset, Group } from "@mantine/core"
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as yup from "yup";

  interface FormData {
    status: string;
  }
  interface TaskStatusProps {
    id: string | null;
    handleCloseModal: () => void;
  }
const schema = yup
  .object({
    status: yup.string().required(),
  })
  .required();
const TaskStatusUpdate = ({ id, handleCloseModal }: TaskStatusProps) => {
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
            id: id,
          };
    
          const res = await axios.put(
            "https://task-management-opll.onrender.com/api/tasks/update-task",
            apiData,
            config
          );
          // Handle the response as needed
          console.log(res);
          Swal.fire(
            "Updated!",
            "You have been successfully Updated.",
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
            <div className="mt-2 flex gap-3">
              <div className="flex flex-col">
              <select {...register("status")}>
                <option value="" hidden>
                  Choose Status
                </option>
                <option value="todo">to Do</option>
                <option value="progress">Progress</option>
                <option value="completed">Completed</option>
              </select>
              </div>
            </div>
          </Group>
          <Group justify="flex-end" mt="md">
            <Button type="submit">
              Submit
            </Button>
          </Group>
        </Fieldset>
      </form>
    </div>
  )
}

export default TaskStatusUpdate
