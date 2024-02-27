import { Badge, Button, Card, Divider, Group, Image, Indicator, Input, Modal, Spoiler, Text, TextInput, Title, Table, Select } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

const ProjectDetail = () => {
  const Balew = "Balew";
  const Solomon = "Solomon";
  const Abebe = "Abebe";
  const Sami = "Sami";
  const [search, setSearch] = useState("");
  const users = [
    { name: 'Designinig', Email: 12.011, phone: 'Requirment Gathering', role: 'Proposal' },
    { name: 'Form Making', Email: 14.007, phone: 'Cost Analysis', role: 'Logo Designing' },
    { name: 'Backend & API', Email: 88.906, phone: 'Y', role: 'Paper Designig' },
    { name: 'Testing', Email: 137.33, phone: 'Ba', role: 'msm' },
    { name: 'Deployement', Email: 140.12, phone: 'Ce', role: 'kdkk' },
  ];

  const filteredUsers = users.filter((user) =>  {
     return search.trim() === '' || user.name.toLowerCase().includes(search.toLowerCase());
  });
  const rows = filteredUsers.map((user) => (
    <Table.Tr key={user.name}>
      <Table.Td>{user.name} [{Balew}]</Table.Td>
      <Table.Td>{user.Email}[{Solomon}]</Table.Td>
      <Table.Td>{user.phone} [{Abebe}]</Table.Td>
      <Table.Td>{user.role} [{Sami}]</Table.Td>
      <Table.Td>Edit</Table.Td>
      <Table.Td>Activate</Table.Td>
      
    </Table.Tr>
  ));

  return (
    <div className=' text-justify m-6 flex flex-col gap-6'>
      
      <Title order={3}>Detail Information</Title>
        <Divider></Divider>
            <div className="flex flex-col sm:flex-row gap-10">
        <div className="w-full sm:justify-around">
        <Indicator inline label="Progress" size={16} withBorder processing color="yellow" >
        <Card  shadow="xs"  padding="md" radius="md" withBorder>
        <div className='gap-5'>
        <Title order={3} >
          Project Information
        </Title>
        <Title order={5}>
         Name: Project Management System
        </Title>
        <Title order={5}>
         Start Date: 02/22/2024
         End Date: 02/22/2025
        </Title>
        </div>
        <div className="p-4 " >
        <Title order={5}>
         Description
        </Title>
        <Spoiler maxHeight={170} showLabel="Show more" hideLabel="Hide">
      A task management system is a tool or framework used for planning,
        tracking, and coordinating tasks within a team or project.
        A task management system is a tool or framework used for planning,
        tracking, and coordinating tasks within a team or project.
        A task management system is a tool or framework used for planning,
        tracking, and coordinating tasks within a team or project.
        A task management system is a tool or framework used for planning,
        tracking, and coordinating tasks within a team or project.
        A task management system is a tool or framework used for planning,
        tracking, and coordinating tasks within a team or project.
        A task management system is a tool or framework used for planning,
        tracking, and coordinating tasks within a team or project.
        <br></br><br></br><br></br>
        <Text color='green' fw={700}  ta="end"> Created AT 2/21/2024</Text>
        <br></br>
        <Group justify='end'>
          <Button>Edit</Button>
          <Button>Add Task</Button>
        </Group>
    </Spoiler>

    </div>
    </Card>
    </Indicator>
        </div>

        <div className="w-full text-center sm:justify-around ">
        <Card  shadow="xs"  padding="md" radius="md" withBorder>
     
        <Title order={2} >
         Assigned Tasks
        </Title>
        <div className='w-1/5 mb-2'>        <Input 
        style={{backgroundColor: '#f2f2f2'}} 
        name='search'  
        onChange={(e) => setSearch(e.target.value)}  
         placeholder='Search...'  />
         </div>
        <div className=" flex justify-between ">
      <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ textAlign: 'center' }}>Todos</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>On Progress</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>On Test</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Complete</Table.Th>
              <Table.Th style={{ textAlign: 'end' }}>Remove</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
    </Card>
    
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail
