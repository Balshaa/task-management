import React from "react";
import { Card, Text, Box, Title, List, rem, ThemeIcon, Divider } from "@mantine/core";
import { IconCircleDashed } from '@tabler/icons-react';

const Contact = () => {

  return (
    <div  className="text-justify">
      <div className="flex flex-col sm:flex-row gap-4 m-6">
      <Title order={3} >Contact Us</Title>
        <div className="w-full p-6 sm:w-1/3 ">
        <Text size="lg" >Feel free to contact us with the following address</Text>
        <List
        spacing="md"
        size="lg"
        center
      >
      <List.Item></List.Item>
      <List.Item>Gurd Shola, Addis Ababa</List.Item>
      <List.Item>Tel: 0928191688</List.Item>
        <List.Item>Email: info@pms.com</List.Item>
        <List.Item>Facebook: Balsha</List.Item>
        <List.Item>Telegram: Balsha</List.Item>
        <List.Item>Tiktok: Balsha</List.Item>
        <List.Item>Youtube: Balsha</List.Item>
        <List.Item
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconCircleDashed style={{ width: rem(16), height: rem(16) }} />
            </ThemeIcon>
          }
        >
          Choose the System instead of using traditional way of doing
        </List.Item>
      </List>
        </div>
        </div>
    </div>
  );
};

export default Contact;
