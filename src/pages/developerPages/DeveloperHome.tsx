import { useState } from 'react';
import { Table, Select, Button, Input, Card, Modal, Title, Divider, Badge } from '@mantine/core';

const status = ['All', 'Pending', 'Completed','In Progress'];

const DeveloperHome = () => {
  
  const [selectedStatus, setSelectedRole] = useState<string>('All');
  const [search, setSearch] = useState("");
  const users = [
    { name: 'Proposal making', startDate: "01/26/2024", endDate: "04/26/2024", status: 'Pending' },
    { name: ' Requirement Gathering', startDate: "02/26/2024", endDate: "06/26/2024", status: 'Completed' },
    { name: 'Designing', startDate: "06/26/2024", endDate: "08/26/2024", status: 'In Progress' },
    { name: 'Implementing', startDate: "10/26/2024", endDate: "15/26/2024", status: 'Pending' },
    { name: 'API', startDate: "16/26/2024", endDate: "26/26/2024", status: 'In Progress' },
  ];

  const filteredUsers = users.filter((user) => {
   
    const roleCondition = selectedStatus === 'All' || user.status === selectedStatus;
    const searchCondition =
      search.trim() === '' || user.name.toLowerCase().includes(search.toLowerCase());
    return roleCondition && searchCondition;
  });
  const rows = filteredUsers.map((user) => (
    <Table.Tr key={user.name}>
      <Table.Td>{user.name}</Table.Td>
      <Table.Td>{user.startDate}</Table.Td>
      <Table.Td>{user.endDate}</Table.Td>
      <Table.Td> <Badge>{user.status}</Badge></Table.Td>      
    </Table.Tr>
  ));
  const handleStatusChange = (value: string | null) => {
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