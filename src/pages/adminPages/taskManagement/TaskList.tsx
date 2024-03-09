import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Input,
  Modal,
  Title,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";

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
const TaskList = () => {
  const [search, setSearch] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const MAX_DESCRIPTION_LENGTH = 40;
  let n =1;
  const handleOpenModal = (taskId: string) => {
    setEditingId(taskId);
    open();
  };
  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(
          "https://task-management-opll.onrender.com/api/tasks/get-tasks",
          config
        );
        setTasks(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllTasks();
  }, []);
  console.log(tasks);

  const filteredTasks = tasks.filter((task) => {
    return (
      search.trim() === "" ||
      task.title.toLowerCase().includes(search.toLowerCase())
    );
  });
  const rows = filteredTasks.map((task) => (
    <Table.Tr key={task.id}>
      <Table.Td>{n++}</Table.Td>
      <Table.Td>{task.title}</Table.Td>
      <Table.Td>
        {task.description.length > MAX_DESCRIPTION_LENGTH
          ? `${task.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
          : task.description}
      </Table.Td>
      <Table.Td>{task.priority}</Table.Td>
      <Table.Td>{task.status}</Table.Td>
      <Table.Td>{task.projectId}</Table.Td>
      <Table.Td>
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-edit"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
            <path d="M16 5l3 3" />
          </svg>
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className=" m-6 flex flex-col gap-4">
      <Title order={3}>Task List</Title>
      <Divider></Divider>
      <div
        className=" flex justify-start gap-2 sm:justify-between "
        style={{ textAlign: "center" }}
      >
        <Input
          style={{ backgroundColor: "#f2f2f2" }}
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <Modal
          opened={opened}
          onClose={close}
          size="auto"
          title="User Registration"
        >
          Task form
        </Modal>

        <Button onClick={open}>Add</Button>
      </div>

      <div className=" flex justify-between ">
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ textAlign: "center" }}>Id</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>Title</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>Description</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>Priority</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>Status</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>Project Id</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>Edit</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </div>
  );
};

export default TaskList;
