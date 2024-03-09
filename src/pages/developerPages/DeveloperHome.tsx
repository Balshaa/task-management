import { useEffect, useState } from 'react';
import { Table, Select, Input, Title, Divider, Badge, Button, Modal } from '@mantine/core';
import axios from 'axios';
import { useDisclosure } from '@mantine/hooks';
import TaskStatusUpdate from '../adminPages/taskManagement/TaskStatusUpdate';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
  projectId: string;
  assigneeId: string;
  createdAt: string;
  createdBy: string;
}
interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  role: string;
  jobTitle: string;
  isAdmin: boolean;
}
const status = ['All', 'todo', 'progress','completed'];

const DeveloperHome = () => {
  
  const [selectedStatus, setSelectedRole] = useState<string>('All');
  const [search, setSearch] = useState("");
  const [openedEdit, { open: openEdit, close: closeEdit }] =
  useDisclosure(false);
    const [tasks, setTasks] = useState<Task[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const MAX_DESCRIPTION_LENGTH = 40;

  const handleOpenModal = (taskId: string) => {
    setEditingId(taskId);
    openEdit();
  };

  const handleCloseModal = () => {
    closeEdit();
  };
  
  const [userInfo, setUserInfo] = useState<User | null>(null);
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(
          "https://task-management-opll.onrender.com/api/auth/get-user-info",
          config
        );
        setUserInfo(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getUserInfo();
  }, []);
  
  useEffect(() => {
    const fetchUserTasks = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(
          `https://task-management-opll.onrender.com/api/tasks/get-user-tasks/{userId}?userId=${userInfo?.id}`,
          config
        );
        setTasks(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUserTasks();
  }, [userInfo?.id]);
  console.log(tasks);
  // to filter tasks of spesfic user
  const filteredTasksForUser = tasks.filter((task) => {
   return task.assigneeId===userInfo?.id
  });

  // filtering for searching application
  const filteredTasks = tasks.filter((task) => {
   
    const roleCondition = selectedStatus === 'All' || task.status === selectedStatus;
    const searchCondition =
      search.trim() === '' || task.title.toLowerCase().includes(search.toLowerCase());
    return roleCondition && searchCondition;
  });
  const rows = filteredTasks.map((task) => (
    <Table.Tr key={task.id}>
      <Table.Td>{task.title}  {task.assigneeId}</Table.Td>
      <Table.Td>
        {task.description.length > MAX_DESCRIPTION_LENGTH?
     `${task.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`  :
     task.description }</Table.Td>
      <Table.Td>{task.status}</Table.Td>
      <Table.Td> 
        <span className='flex  justify-center  gap-4'>
        <Badge>
        {task.status}
      </Badge>
      
      <Button onClick={() => handleOpenModal(task.id)}>
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
        </span>
      </Table.Td>      
    </Table.Tr>
  ));
  const handleStatusChange = (value: string | null) => {
    setSelectedRole(value || 'All');
  };
  return (
    <div className=" m-6 flex flex-col gap-4">
                <Modal
            opened={openedEdit}
            onClose={closeEdit}
            size="auto"
            title="User Editing"
          >
            <TaskStatusUpdate id={editingId} handleCloseModal={handleCloseModal} />
          </Modal>
      <Title order={3}>Task List</Title>
        <Divider></Divider>
      <div className=" flex justify-start gap-2 sm:justify-between " style={{ textAlign: 'center' }}>
      <Input style={{backgroundColor: '#f2f2f2'}} name='search'  onChange={(e) => setSearch(e.target.value)}   placeholder='Search...'  />

      </div>
      
      <div className=" flex justify-between ">
      <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ textAlign: 'center' }}>Title </Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Description</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>End Date</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Update Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        <div className=' ml-2'>
        <Title order={4}>Filter by Status</Title>
      <Select
          data={status}
          value={selectedStatus}
          onChange={handleStatusChange}
          placeholder="Filter by Status"
        /> 
      </div>
      </div>
    </div>
  );
};

export default DeveloperHome;