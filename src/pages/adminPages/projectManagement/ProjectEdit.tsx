import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Fieldset, Group, Select, TextInput, Textarea } from "@mantine/core";

interface FormData {
  Title: string;
  Description: string;
  Email: string;
  PhoneNumber: number;
 
}

const schema = yup
  .object({
    Title: yup.string().required(),
    Description: yup.string().required(),
    Email: yup.string().email().required(),
    PhoneNumber: yup.number().typeError("Valid Phone is required").positive().integer().required("Valid Phone is required"),
  })
  .required();


const ProjectEdit = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  console.log(watch("Title")); // watch input value by passing the name of it

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset variant="filled">
          <Group justify="flex">
            <div className="flex flex-col">
            <TextInput
              label="Title"
              placeholder="Title"
             
              {...register("Title")} />
              <p className="text-red-500">{errors.Title?.message}</p>
              </div>
              <div className="flex flex-col">
            <Textarea label="Description" placeholder="Edit Description"
            {...register("Description")} />
            <p className="text-red-500">{errors.Description?.message}</p>
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
}

export default ProjectEdit
