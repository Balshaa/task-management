import { useEffect, useState } from "react";
import {
  Table,
  Select,
  Button,
  Input,
  Modal,
  Title,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import UserForm from "./UserForm";
import axios from "axios";
import UserEdit from "./UserEdit";

interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  role: string;
  jobTitle: string;
  isAdmin: boolean;
}
const roles = ["All", "Front_end developer", "Back_end Developer", "Tester"];

const UserList = () => {
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [openedEdit, { open: openEdit, close: closeEdit }] =
    useDisclosure(false);
  // const handleClose = () => close();
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleOpenModal = (userId: string) => {
    setEditingId(userId);
    openEdit();
  };
  const handleCloseModal = () => {
    close();
    closeEdit();
  };
  let n = 1;
  const [users, setUsers] = useState<User[]>([]);
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

  console.log(userInfo);
  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(
          "https://task-management-opll.onrender.com/api/users/get-users",
          config
        );
        setUsers(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllUsers();
  }, []);

  console.log(users);

  const filteredUsers = users.filter((user) => {
    const StatusCondition =
      selectedRole === "All" || user.jobTitle === selectedRole;
    const searchCondition =
      search.trim() === "" ||
      user.name.toLowerCase().includes(search.toLowerCase());
    return StatusCondition && searchCondition;
  });
  const rows = filteredUsers.map((user) => (
    <Table.Tr key={user.id}>
      <Table.Td>
        {user.name}
      </Table.Td>
      <Table.Td>{user.email}</Table.Td>
      <Table.Td>{user.phoneNumber}</Table.Td>
      <Table.Td>{user.jobTitle}</Table.Td>
      <Table.Td>{user.isAdmin ? "Yes" : "No"}</Table.Td>

      <Table.Td>
        <Button onClick={() => handleOpenModal(user.id)}>
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
      <Table.Td>
        <Button color="pink">Deactivate</Button>
      </Table.Td>
    </Table.Tr>
  ));

  const handleRoleChange = (value: string | null) => {
    setSelectedRole(value || "All");
  };

  return (
    <>
      {userInfo !== null && userInfo.isAdmin ? (
        <div className=" m-6 flex flex-col gap-4">
          <Modal
            opened={openedEdit}
            onClose={closeEdit}
            size="auto"
            title="User Editing"
          >
            <UserEdit id={editingId} handleCloseModal={handleCloseModal} />
          </Modal>
          <Title order={3}>User List</Title>
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
              <UserForm handleCloseModal={handleCloseModal} />
            </Modal>

            <Button onClick={open}>Add</Button>
          </div>

          <div className=" flex justify-between ">
            <Table striped highlightOnHover withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ textAlign: "center" }}>Full Name</Table.Th>
                  <Table.Th style={{ textAlign: "center" }}>Email</Table.Th>
                  <Table.Th style={{ textAlign: "center" }}>
                    Phone Number
                  </Table.Th>
                  <Table.Th style={{ textAlign: "center" }}>job Title</Table.Th>
                  <Table.Th style={{ textAlign: "center" }}>is Admin</Table.Th>
                  <Table.Th style={{ textAlign: "end" }}>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
            <div className=" ml-2">
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
      ) : (
        <div>
          {" "}
          <h1>NOT AUTHERIZED</h1>
        </div>
      )}
    </>
  );
};

export default UserList;
