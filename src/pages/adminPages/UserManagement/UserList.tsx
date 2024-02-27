import { useState } from 'react';
import { Table, Select, Button, Input, Card, Modal, Title, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import UserForm from './UserForm';

const roles = ['All', 'Frontend Developer', 'Backend Developer','Tester'];

const UserList = () => {
  const [selectedRole, setSelectedRole] = useState<string>('All');
  const [search, setSearch] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const users = [
    { name: 'Balew Derseh', Email: 'balsha@gmail.com', phone: '0984321954', role: 'Frontend Developer' },
    { name: 'Solomon Shiferaw', Email: 'balewder@gmail.com', phone: '097737622', role: 'Frontend Developer' },
    { name: 'Balew Ewunete', Email: 'bb@gmail.com', phone: '0999377826', role: 'Backend Developer' },
    { name: 'Kebede boy', Email: 'bmc@gmail.com', phone: '0939883882', role: 'Backend Developer' },
    { name: 'Abebe man', Email: 'sbbsn@gmail.com', phone: '0998377726', role: 'Tester' },
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
      <Table.Td>{user.role}</Table.Td>
      <Table.Td><Button><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg></Button></Table.Td>
      <Table.Td><Button color='pink'>Deactivate</Button></Table.Td>
      
    </Table.Tr>
  ));

  const handleRoleChange = (value: string | null) => {
    setSelectedRole(value || 'All');
  };

  return (
    <div className=" m-6 flex flex-col gap-4">
      <Title order={3}>User List</Title>
        <Divider></Divider>
      <div className=" flex justify-start gap-2 sm:justify-between " style={{ textAlign: 'center' }}>
      <Input style={{backgroundColor: '#f2f2f2'}} name='search'  onChange={(e) => setSearch(e.target.value)}   placeholder='Search...'  />
      <Modal opened={opened} onClose={close} size="auto" title="User Registration">
        <UserForm />
      </Modal>

      <Button onClick={open}>Add</Button>

      </div>
      
      <div className=" flex justify-between ">
      <Table striped highlightOnHover withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ textAlign: 'center' }}>Full Name</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Email</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>Phone Number</Table.Th>
              <Table.Th style={{ textAlign: 'center' }}>job Title</Table.Th>
              <Table.Th style={{ textAlign: 'end' }}>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      <div className=' ml-2'>
        <Title order={4}>Filter by Role</Title>
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

export default UserList;