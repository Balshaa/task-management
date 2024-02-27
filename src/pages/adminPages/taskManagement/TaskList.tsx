import { useState } from 'react';
import { Table, Select, Button, Input, Card, Modal, Title, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import TaskForm from './TaskForm';


const TaskList = () => {
  const [search, setSearch] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const users = [
    { name: 'Proposal making', Description:'Proposal making', CreatedAt: '01/01/2024', Id: 1 },
    { name: 'Requirement Gathering', Description: 'Requirement Gathering', CreatedAt: '05/05/2024', Id: 2 },
    { name: 'Designing', Description: 'Designing', CreatedAt: '06/06/2024', Id: 4 },
    { name: 'Implementing', Description: 'Implementing', CreatedAt: '02/02/2024', Id: 5 },
    { name: 'API', Description: 'API', CreatedAt: '03/30/2024', Id: 6 },
  ];

  const filteredUsers = users.filter((user) => {
   return   search.trim() === '' || user.name.toLowerCase().includes(search.toLowerCase());
  });
  const rows = filteredUsers.map((user) => (
    <Table.Tr key={user.Id}>
       <Table.Td>{user.Id}</Table.Td>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.Description}</Table.Td>
      <Table.Td>{user.CreatedAt}</Table.Td>
      <Table.Td><Button><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg></Button></Table.Td>
      
      
    </Table.Tr>
  ));

  return (
    <div className=" m-6 flex flex-col gap-4">
      <Title order={3}>Task List</Title>
        <Divider></Divider>
      <div className=" flex justify-start gap-2 sm:justify-between " style={{ textAlign: 'center' }}>
      <Input style={{backgroundColor: '#f2f2f2'}} name='search'  onChange={(e) => setSearch(e.target.value)}   placeholder='Search...'  />
      <Modal opened={opened} onClose={close} size="auto" title="User Registration">
        <TaskForm />
      </Modal>

      <Button onClick={open}>Add</Button>

      </div>
      
      <div className=" flex justify-between ">
      <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
            <Table.Th style={{ textAlign: 'center' }}>Id</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Task Name</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Description</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Created At</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Edit</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </div>
  );
};

export default TaskList;