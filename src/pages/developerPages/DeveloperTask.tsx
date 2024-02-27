import { useState } from 'react';
import { Table, Select, Button, Input, Card, Modal, Title, Divider, Badge } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const roles = ['All', 'Pending', 'Completed','In Progress'];

const DeveloperTask = () => {
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [search, setSearch] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const users = [
    { name: 'Balew Derseh', Email: 12.011, phone: 'C', role: 'Pending' },
    { name: 'Solomon Shiferaw', Email: 14.007, phone: 'N', role: 'Completed' },
    { name: 'Balew Ewunete', Email: 88.906, phone: 'Y', role: 'In Progress' },
    { name: 'Kebede boy', Email: 137.33, phone: 'Ba', role: 'Pending' },
    { name: 'Abebe man', Email: 140.12, phone: 'Ce', role: 'In Progress' },
  ];

  const filteredUsers = users.filter((user) => {
    const roleCondition = selectedRole === 'All' || user.role === selectedRole;
    const searchCondition =
      search.trim() === '' || user.name.toLowerCase().includes(search.toLowerCase());
    return roleCondition && searchCondition;
  });
  const rows = filteredUsers.map((user) => (
    <Table.Tr key={user.name}>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.Email}</Table.Td>
      <Table.Td>{user.phone}</Table.Td>
      <Table.Td> <Badge>{user.role}</Badge></Table.Td>
      <Table.Td>Add Tag</Table.Td>
      
    </Table.Tr>
  ));

  const handleRoleChange = (value: string | null) => {
    setSelectedRole(value || 'All');
  };

  return (
    <div className=" m-6 flex flex-col gap-4">
      <Title order={3}>Task List</Title>
        <Divider></Divider>
      <div className=" flex justify-start gap-2 sm:justify-between " style={{ textAlign: 'center' }}>
      <Input style={{backgroundColor: '#f2f2f2'}} name='search'  onChange={(e) => setSearch(e.target.value)}   placeholder='Search...'  />

      </div>
      
      <div className=" flex justify-between ">
      <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ textAlign: 'center' }}>Task Name</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Start Dtate</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>End Date</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Update Status</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Tag</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      <div className=' ml-2'>
      <Select
          data={roles}
          value={selectedRole}
          onChange={handleRoleChange}
          placeholder="Filter by role"
        />
       
      </div>
      </div>
    </div>
  );
};

export default DeveloperTask;