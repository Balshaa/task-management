import { useState } from 'react';
import { Table, Select, Button, Input, Card, Modal, Divider, Title, Badge, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ProjectForm from './ProjectForm';
import ProjectEdit from './ProjectEdit';
import { Menu, Text, rem } from '@mantine/core';
import {
    IconSettings,
    IconSearch,
    IconPhoto,
    IconMessageCircle,
  } from '@tabler/icons-react';
import ProjectTask from './ProjectTask';
const status = ['All', 'Pending', 'Progress','Completed'];

const ProjectListT = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [search, setSearch] = useState("");
  const [openedRegistration, { open: openRegistration, close: closeRegistration }] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] = useDisclosure(false);
  const [openedUpdateStatus, { open: openUpdateStatus, close: closeUpdateStatus }] = useDisclosure(false);

  
  const users = [
    { name: 'Project Mananment system', Deadline: '05/07/2024', status: 'Pending', CreatedAt: '01/04/2024' },
    { name: 'School Mananment system', Deadline: '25/08/2024', status: 'Completed', CreatedAt: '03/04/2024' },
    { name: 'Clinic Mananment system', Deadline: '31/07/2024', status: 'Progress...', CreatedAt: '09/04/2024' },
    { name: 'Liberary Mananment system', Deadline: '11/09/2024', status: 'OnTest', CreatedAt: '16/04/2024' },
    { name: 'Attendance Mananment system', Deadline: '24/08/2024', status: 'Pending', CreatedAt: '21/04/2024' },
  ];

  const filteredUsers = users.filter((user) => {
    const StatusCondition = selectedStatus === 'All' || user.status === selectedStatus;
    const searchCondition =
      search.trim() === '' || user.name.toLowerCase().includes(search.toLowerCase());
    return StatusCondition && searchCondition;
  });
  const rows = filteredUsers.map((user) => (
    <Table.Tr key={user.name}>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.Deadline}</Table.Td>
      <Table.Td> <Badge color='pink'>{user.status}</Badge></Table.Td>
      <Table.Td>{user.CreatedAt}</Table.Td>
      <Table.Td>
      <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button><IconSettings /></Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item >
        <Anchor 
        variant="gradient"
        href="/Admin/ProjectDetail" >
      Show
    </Anchor>
        </Menu.Item>
        <Menu.Item >
        <Modal opened={openedEdit} onClose={closeEdit} size="auto" title="Project Editing">
       <ProjectEdit />
      </Modal>
      <Anchor 
      onClick={openEdit}
        variant="gradient"
         >
      Edit
    </Anchor>
        </Menu.Item>
        <Menu.Item >
        <Modal opened={openedUpdateStatus} onClose={closeUpdateStatus} size="auto" title="Task Editing">
        <ProjectTask />
      </Modal>
      <Anchor 
      onClick={openUpdateStatus}
        variant="gradient"
         >
       Update Status
    </Anchor>
        </Menu.Item>
        <Menu.Item  >
        <Anchor 
      onClick={openUpdateStatus}
        variant="gradient"
         >
      Assign Task
    </Anchor>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
      </Table.Td>
      
    </Table.Tr>
  ));

  const handleStatusChange = (value: string | null) => {
    setSelectedStatus(value || 'All');
  };

  return (
    <div className=" m-6 flex flex-col gap-4">
        <Title order={3}>Project List</Title>
        <Divider></Divider>
      <div className=" flex justify-start gap-2 sm:justify-between " style={{ textAlign: 'center' }}>
      <Input style={{backgroundColor: '#f2f2f2'}} name='search'  onChange={(e) => setSearch(e.target.value)}   placeholder='Search...'  />
      <Modal opened={openedRegistration} onClose={closeRegistration} size="auto" title="Project Registration">
        <ProjectForm />
      </Modal>

      <Button onClick={openRegistration}>Add</Button>

      </div>
      
      <div className=" flex justify-between ">
      <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ textAlign: 'center' }}>Projec Name</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Due Date</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Status</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Created At</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Manage</Table.Th>
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

export default ProjectListT;