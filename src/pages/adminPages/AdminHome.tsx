import { Card, Divider, Text, Title } from "@mantine/core";
import UserChart from "./charts/UserChart";
import ProjectListT from "./projectManagement/ProjectListT";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminHome = () => {
  const [countUsers, setCountUsers] = useState<number>(0);
  const [countProjects, setCountProjects] = useState<number>(0);
  const [countTasks, setCountTasks] = useState<number>(0);
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
        setCountUsers(res.data.count);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllUsers();
  }, []);

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
        setCountProjects(res.data.count);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllProjects();
  }, []);

  useEffect(() => {
    const fetchAllTasks = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const res = await axios.get(
          "https://task-management-opll.onrender.com/api/tasks/get-tasks",
          config
        );
        setCountTasks(res.data.count);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllTasks();
  }, []);

  return (
    <div className="m-3">
      <Text fw="bold" className="text-left">
        /Home
      </Text>
      <Divider></Divider>
      {/*  one section or row of page */}
      <div className="flex flex-col sm:flex-row gap-10 mt-6">
        {/*  half section or row of page */}
        <div className=" flex flex-col w-full sm:justify-around gap-3">
          {/*  one  row cards of half section */}
          <div className="flex justify-center  gap-3  ">
            <Card
              withBorder
              style={{
                backgroundColor: "#00DDDD",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "cyan";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00DDDD";
              }}
              className=" h-24 w-1/4"
            >
              <Title order={4}>{countUsers} </Title>
              <Title order={4}> Users</Title>
            </Card>
            <Card
              withBorder
              style={{
                backgroundColor: "#00DDDD",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "cyan";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00DDDD";
              }}
              className=" h-24 w-1/4"
            >
              <Title order={4}>{countProjects} </Title>
              <Title order={4}> Projects</Title>
            </Card>
            <Card
              withBorder
              style={{
                backgroundColor: "#00DDDD",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "cyan";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00DDDD";
              }}
              className=" h-24 w-1/4"
            >
              <Title order={4}>{countTasks} </Title>
              <Title order={4}> Tasks</Title>
            </Card>
          </div>
          <div className="flex justify-center gap-3">
            <Card
              withBorder
              style={{
                backgroundColor: "#00DDDD",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "cyan";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00DDDD";
              }}
              className=" h-24 w-1/4"
            >
              <Title order={4}>8 </Title>
              <Title order={4}> Active Users</Title>
            </Card>
            <Card
              withBorder
              style={{
                backgroundColor: "#00DDDD",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "cyan";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00DDDD";
              }}
              className=" h-24 w-1/4"
            >
              <Title order={4}>4 </Title>
              <Title order={4}> Progress Projects</Title>
            </Card>
            <Card
              withBorder
              style={{
                backgroundColor: "#00DDDD",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "cyan";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00DDDD";
              }}
              className=" h-24 w-1/4"
            >
              <Title order={4}>5 </Title>
              <Title order={4}> Backlog Tasks</Title>
            </Card>
          </div>
          <div className="flex justify-center gap-3">
            <Card
              withBorder
              style={{
                backgroundColor: "#00DDDD",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "cyan";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00DDDD";
              }}
              className=" h-24 w-1/4"
            >
              <Title order={4}>8 </Title>
              <Title order={4}> Completed Projects</Title>
            </Card>
            <Card
              withBorder
              style={{
                backgroundColor: "#00DDDD",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "cyan";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00DDDD";
              }}
              className=" h-24 w-1/4"
            >
              <Title order={4}> 4 </Title>
              <Title order={4}>Catagories</Title>
            </Card>
            <Card
              withBorder
              style={{
                backgroundColor: "#00DDDD",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "cyan";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#00DDDD";
              }}
              className=" h-24 w-1/4"
            >
              <Title order={4}>5 </Title>
              <Title order={4}> Backlog Tasks</Title>
            </Card>
          </div>
        </div>

        <div className="w-full sm:justify-around ">
          <UserChart />
        </div>
      </div>
      {/*  List one section or row  It is better to display all active projects here */}
      <div className="flex flex-col sm:flex-row gap-10 mt-6"></div>
      <Card withBorder>
        <ProjectListT />
      </Card>
    </div>
  );
};

export default AdminHome;
