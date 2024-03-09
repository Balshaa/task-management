import { Badge, Button, Card, Divider, Group, Image, Indicator, Input, Modal, Spoiler, Text, TextInput, Title } from '@mantine/core'
import React, { useState } from 'react'
import ProjectForm from '../adminPages/projectManagement/ProjectForm'
import { useDisclosure } from '@mantine/hooks';

const ProjectList = () => {
    const [search, setSearch] = useState("");
    const [opened, { open, close }] = useDisclosure(false);
    
  return (
    
    <div className=" m-6 flex flex-col gap-10 text-justify">
        {/* Searchbar and Add Button */}
         <div className=" flex justify-start gap-2 sm:justify-between " style={{ textAlign: 'center' }}>
        <TextInput style={{backgroundColor: '#f2f2f2'}} name='search'  onChange={(e) => setSearch(e.target.value)}   placeholder='Search...'  />
     
      </div>
  {/* Project List one section or row */}
      <div className="flex flex-col sm:flex-row gap-10 mt-6">
        <div className="w-full sm:justify-around">
           <Indicator inline label="New" size={16} withBorder processing color="cyan" >
        <Card  shadow="xs"  padding="md" radius="md" withBorder>
        <Title order={2} >
          Project Management System
        </Title>
        <div className="p-4 " >
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
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
        <div className="w-full sm:justify-around ">
          <Indicator inline label="Progress" size={16} withBorder processing color="yellow" >
        <Card  shadow="xs"  padding="md" radius="md" withBorder>
        <Title order={2} >
          Project Management System
        </Title>
        <div className="p-4 " >
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
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
      </div>
        {/* Project List one section or row */}
        <div className="flex flex-col sm:flex-row gap-10 mt-6">
        <div className="w-full sm:justify-around">
           <Indicator inline label="Completed" size={16} withBorder processing color="green" >
        <Card  shadow="xs"  padding="md" radius="md" withBorder>
        <Title order={2} >
          Project Management System
        </Title>
        <div className="p-4 " >
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
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
        
        <div className="w-full sm:justify-around ">
          <Indicator inline label="New" size={16} withBorder processing color="green" >
        <Card  shadow="xs"  padding="md" radius="md" withBorder>
        <Title order={2} >
          Project Management System
        </Title>
        <div className="p-4 " >
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
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
    </Spoiler>

    </div>
    </Card>
       </Indicator>
        </div>
      </div>
        {/* Project List one section or row */}
        <div className="flex flex-col sm:flex-row gap-10 mt-6">
        <div className="w-full sm:justify-around">
           <Indicator inline label="New" size={16} withBorder processing color="green" >
        <Card  shadow="xs"  padding="md" radius="md" withBorder>
        <Title order={2} >
          Project Management System
        </Title>
        <div className="p-4 " >
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
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
    </Spoiler>

    </div>
    </Card>
       </Indicator>
        </div>
        <div className="w-full sm:justify-around ">
          <Indicator inline label="New" size={16} withBorder processing color="green" >
        <Card  shadow="xs"  padding="md" radius="md" withBorder>
        <Title order={2} >
          Project Management System
        </Title>
        <div className="p-4 " >
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Hide">
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
    </Spoiler>

    </div>
    </Card>
       </Indicator>
        </div>
      </div>
    </div>
  )
}

export default ProjectList
