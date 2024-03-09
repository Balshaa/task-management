import {
  Button,
  Card,
  Divider,
  Group,
  Indicator,
  Input,
  Modal,
  Spoiler,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import ProjectEdit from "./ProjectEdit";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  isActive: boolean;
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  // priority: string;
  projectId: string;
  // createdAt: string;
  // createdBy: string;
}

const ProjectDetail = () => {
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [
    openedRegistration,
    { open: openRegistration, close: closeRegistration },
  ] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  const [project, setProject] = useState<Project | null>(null);
  const handleCloseModal = () => {
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
          `https://task-management-opll.onrender.com/api/projects/get-project/${id}`,
          config
        );
        setProject(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchProjectTasks = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(
          `https://task-management-opll.onrender.com/api/tasks/get-tasks`,
          config
        );
        setTasks(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (id) {
      fetchAllProjects();
      fetchProjectTasks();
    }
  }, [id]);

  if (!project || !tasks) {
    return <div>Loading...</div>;
  }

  console.log(project);
  console.log(tasks);

  const filteredBacklogProjectTasks = tasks.filter((task) => {
    return task.projectId === id && task.status === "backlog";
  });
  const filteredProgressProjectTasks = tasks.filter((task) => {
    return task.projectId === id && task.status === "progress";
  });
  const filteredCompletedProjectTasks = tasks.filter((task) => {
    return task.projectId === id && task.status === "completed";
  });
  return (
    <div className="text-justify m-6 flex flex-col gap-6">
      <Title order={3}>Detail Information</Title>
      <Divider></Divider>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="w-full sm:justify-around">
          <Indicator
            inline
            label="Progress"
            size={16}
            withBorder
            processing
            color="yellow"
          >
            <Card shadow="xs" padding="md" radius="md" withBorder>
              <div className="gap-5">
                <Title order={3}>Project Information</Title>
                <Divider></Divider>
                <Title order={5}>Title: {project.title}</Title>
                <Title order={5}>
                  Is Active:{" "}
                  {project.isActive ? (
                    <span style={{ color: "green" }}>Yes</span>
                  ) : (
                    <span style={{ color: "red" }}>No</span>
                  )}
                </Title>
              </div>
              <div className="p-4">
                <Title order={5}>Description</Title>
                <Spoiler maxHeight={170} showLabel="Show more" hideLabel="Hide">
                  {project.description}
                  <br></br>
                  <br></br>
                  <Text color="green" fw={700} ta="end">
                    {" "}
                    Created AT{" "}
                    {new Date(project.createdAt).toLocaleDateString()}
                  </Text>
                  <br></br>
                  <Group justify="end">
                    <Button onClick={openEdit}>Edit</Button>
                    <Modal
                      opened={openedEdit}
                      onClose={closeEdit}
                      size="auto"
                      title="Edit Project"
                    >
                      <ProjectEdit
                        id={project.id}
                        handleCloseModal={handleCloseModal}
                      />
                    </Modal>
                  </Group>
                </Spoiler>
              </div>
            </Card>
          </Indicator>
        </div>

        <div className="w-full text-center sm:justify-around">
          <Card shadow="xs" padding="md" radius="md" withBorder>
            <Title order={2}>Assigned Tasks</Title>
            <Divider></Divider>
            <div className="w-1/5 m-2">
              <Input
                style={{ backgroundColor: "#f2f2f2" }}
                name="search"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
              />
            </div>
            <div className="flex bg-gray-100 border justify-around">
              <div className="border-r h-full">
                
                <Title c="pink" order={4}>ToDo</Title>
                <Divider></Divider>
                <ol>
                  {filteredBacklogProjectTasks.map((task, index) => (
                    <li key={task.id}>{`${index + 1}. ${task.title}`}</li>
                  ))}
                </ol>
              </div>
              <div className="border-r h-full">
                
                <Title c="yellow" order={4}>Progress</Title>
                <Divider></Divider>
                <ol>
                  {filteredProgressProjectTasks.map((task, index) => (
                    <li key={task.id}>{`${index + 1}. ${task.title}`}</li>
                  ))}
                </ol>
              </div>
              <div className="border-r h-full">
                
                <Title c="green" order={4}>Completed</Title>
                <Divider></Divider>
                <ol>
                  {filteredCompletedProjectTasks.map((task, index) => (
                    <li key={task.id}>{`${index + 1}. ${task.title}`}</li>
                  ))}
                </ol>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
