import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Box,
  Title,
} from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
import React from "react";

const About = () => {
  const TitleStyle = {
    marginBottom: "1rem",
    color: "white",
    background: "linear-gradient(to left, lightGreen, steelBlue)",
  };
  return (
    <Box my="xl" component="a" className="text-justify">
      {/*  Hero section*/}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <div className="w-full sm:w-2/3">
          <Card
            shadow="xs"
            padding="md"
            radius="md"
            style={{ backgroundColor: "" }}
          >
            <Title order={2} style={TitleStyle}>
              About Us
            </Title>
            <div className="p-4 ">
              <Title order={4}>Project Organization</Title>
              <Text>
                Our Company Project Management System is a powerful tool
                designed to streamline project management processes and enhance
                collaboration within our organization. This document provides an
                overview of the system, its features, and benefits for both
                developers and admin managers. Easily create and manage
                projects, assign team members, and set project milestones and
                deadlines
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
              We have make confortable working environments for developers and
              Project aministrator
            </Text>

            <Button color="blue" fullWidth mt="md" radius="md">
              Join Us
            </Button>
          </Card>
        </div>
      </div>
    </Box>
  );
};

export default About;
