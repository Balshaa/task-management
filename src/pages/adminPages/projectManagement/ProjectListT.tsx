import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Input,
  Modal,
  Divider,
  Title,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import ProjectForm from "./ProjectForm";
import ProjectEdit from "./ProjectEdit";
import { Menu } from "@mantine/core";
import { IconSettings } from "@tabler/icons-react";
import TaskForm from "../taskManagement/TaskForm";
import axios from "axios";

interface Project {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  createdBy: string;
  isActive: boolean;
}
const description = ["All", "Pending", "Progress", "Completed"];

const ProjectListT = () => {
  const MAX_DESCRIPTION_LENGTH = 40;
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [
    openedRegistration,
    { open: openRegistration, close: closeRegistration },
  ] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const [openedAddTask, { open: openAddTask, close: closeAddTask }] =
    useDisclosure(false);
  const [
    openedTaskRegistration,
    { open: openTaskRegistration, close: closeTaskRegistration },
  ] = useDisclosure(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [projectId, setProjectId] = useState<string | null>(null);

  const handleEditProjectModal = (projectId: string) => {
    setEditingId(projectId);
    openEdit();
  };

  const handleTaskRegistration = (projectId: string) => {
    setProjectId(projectId);
    openTaskRegistration();
  };
  const handleCloseModal = () => {
    closeTaskRegistration();
    closeRegistration();
    closeEdit();
  };
  useEffect(() => {
    const fetchAllProjects = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(
          "https://task-management-opll.onrender.com/api/projects/get-projects",
          config
        );
        setProjects(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllProjects();
  }, []);
  console.log(projects);

  const filteredUsers = projects.filter((project) => {
    const StatusCondition =
      selectedStatus === "All" || project.description === selectedStatus;
    const searchCondition =
      search.trim() === "" ||
      project.title.toLowerCase().includes(search.toLowerCase());
    return StatusCondition && searchCondition;
  });
  const rows = filteredUsers.map((project) => (
    <Table.Tr key={project.id}>
      <Table.Td>
        {project.title}
      </Table.Td>
      <Table.Td>
        {project.description.length > MAX_DESCRIPTION_LENGTH
          ? `${project.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
          : project.description}
      </Table.Td>
      <Table.Td>{new Date(project.createdAt).toLocaleDateString()}</Table.Td>
      <Table.Td>{project.isActive ? "yes" : "no"}</Table.Td>
      <Table.Td>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button>
              <IconSettings />
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item>
              <Anchor
                variant="gradient"
                href={`/Admin/ProjectDetail/${project.id}`}
              >
                Detail
              </Anchor>
            </Menu.Item>
            <Menu.Item>
              <Anchor
                onClick={() => handleEditProjectModal(project.id)}
                variant="gradient"
              >
                Edit
              </Anchor>
            </Menu.Item>
            <Menu.Item>
              <Anchor
                onClick={() => handleTaskRegistration(project.id)}
                variant="gradient"
              >
                Add Task
              </Anchor>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div className=" m-6 flex flex-col gap-4">
      <Modal
        opened={openedEdit}
        onClose={closeEdit}
        size="auto"
        title="Project Editing"
      >
        <ProjectEdit id={editingId} handleCloseModal={handleCloseModal} />
      </Modal>
      <Modal
        opened={openedTaskRegistration}
        onClose={closeTaskRegistration}
        size="auto"
        title="Add Task"
      >
        <TaskForm id={projectId} handleCloseModal={handleCloseModal} />
      </Modal>
      <Title order={3}>Project List</Title>
      <Divider></Divider>
      <div
        className=" flex justify-start gap-2 sm:justify-between "
        style={{ textAlign: "center" }}
      >
        <Input
          style={{ backgroundColor: "#f2f2f2" }}
          title="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />
        <Modal
          opened={openedRegistration}
          onClose={closeRegistration}
          size="auto"
          title="Project Registration"
        >
          <ProjectForm handleCloseModal={handleCloseModal} />
        </Modal>

        <Button onClick={openRegistration}>Add</Button>
      </div>

      <div className=" flex justify-between ">
        <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ textAlign: "center" }}>Title</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>Description</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>Created At</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>Is Active</Table.Th>
              <Table.Th style={{ textAlign: "center" }}>Manage</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        {/* <div className=' ml-2'>
        <Title order={4}>Filter by Status</Title>
      <Select
          data={description}
          value={selectedStatus}
          onChange={handleStatusChange}
          placeholder="Filter by Status"
        />
       
      </div> */}
      </div>
    </div>
  );
};

export default ProjectListT;
