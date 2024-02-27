import React from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Box,
  Title,
  Paper,
  List,
  rem,
  ThemeIcon,
  Divider,
} from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react';
import classes from '../../styles/Mantine.module.css';



const Home = () => {
  const TitleStyle = {
    marginBottom: "1rem",
    color: "white",
    background: "linear-gradient(to left, lightGreen, steelBlue)",
  }
  return (
    <Box my="xl" component="a" className="text-justify">
     {/*  Hero section*/}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <div className="w-full sm:w-2/3">
        <Card  shadow="xs"  padding="md" radius="md">
        <Title order={2} style={TitleStyle}>
          Project Management System
        </Title>
        <div className="p-4 " >
        <Text size="lg" >
          A task management system is a tool or framework used for planning,
          tracking, and coordinating tasks within a team or project.
        </Text>
        <Text >
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
    </Text>
    </div>
    </Card>
        </div>
        <div className="w-full sm:w-1/3 ">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivvtEdNiG2akaY6wjn1nrgQOmH6eTDg24Ew&usqp=CAU"
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Welcome</Text>
              <Badge color="pink">Use it</Badge>
            </Group>

            <Text size="sm" c="dimmed">
            We have make confortable working environments for developers and Project aministrator
            </Text>

            <Badge color="blue" fullWidth mt="md" radius="md">
              Grow Together
            </Badge>
          </Card>
        </div>
      </div>
   {/*  core Core Features*/}
   <div className=" bg-fuchsia-50 mt-16">
   <div className=" bg-fuchsia-100 flex  justify-center mt-3 ">
        <Title order={3} >Core Features</Title>
        </div>
      <div className=" p-8 bg-fuchsia-50 flex flex-col sm:flex-row  gap-8 mt-3">
          <Card>
            <Title order={4}>Project Organization </Title>
            <Text size="lg">
              Easily create and manage projects, assign team members, and set
              project milestones and deadlines
            </Text>
          </Card>
          <Card>
            <Title order={4}>Task Management </Title>
            <Text size="lg">
             Break down projects into tasks, assign responsibilities, set due dates,
             and track progress with ease.
            </Text>
          </Card>
          <Card>
            <Title order={4}>Team Collaboration </Title>
            <Text size="lg">
             Foster effective collaboration with built-in communication tools, 
            allowing team members to share files, exchange messages, and collaborate in real-time.
            </Text>
          </Card>
      </div>
      <Divider my="md" />
      </div>
       {/* Why Choose Our Project Management System?*/}
       <div className=" flex  flex-col sm:flex-row justify-between  mt-16 bg-slate-50">
       <div className="w-full sm:w-1/3 ">
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjemPd1ueVtRJWgzppSnVemyBjYg-NXVy1hg&usqp=CAU"
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Welcome</Text>
            <Badge color="pink">Use it</Badge>
          </Group>

          <Text size="sm" c="dimmed">
          We have make confortable working environments for developers and Project aministrator
          </Text>

          <Badge color="blue" fullWidth mt="md" radius="md">
            Grow Together
          </Badge>
          </Card>
        </div>
       <div>
       <Title order={3} >Why Choose Us?</Title>
       <Text size="lg" >We have make confortable working environments for developers in Terms of;</Text>
       <List
       spacing="xs"
       size="sm"
       center
       icon={
         <ThemeIcon color="teal" size={24} radius="xl">
           <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
         </ThemeIcon>
       }
     >
       <List.Item>Efficiency</List.Item>
       <List.Item>Collaboration</List.Item>
       <List.Item>Transparency</List.Item>
       <List.Item>Flexibility</List.Item>
       <List.Item
         icon={
           <ThemeIcon color="blue" size={24} radius="xl">
             <IconCircleDashed style={{ width: rem(16), height: rem(16) }} />
           </ThemeIcon>
         }
       >
         Choose System instead of using traditional way of doing
       </List.Item>
     </List>
       </div>
       </div>
    </Box>
  );
};

export default Home;
