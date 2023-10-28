import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <Box className="about-us-container" p="4">
      <Heading className="about-us-title" size="xl">
        Task Manager
      </Heading>
      <Text className="about-us-description">
        Organize your life with our Task Manager application! With intuitive
        features, such as the ability to add, edit, and delete tasks, and an
        easy-to-use interface, its never been easier to keep your to-dos under
        control.
      </Text>
      <Heading className="tech-stack-title" size="lg" mt="4">
        Technology Stack
      </Heading>
      <UnorderedList className="tech-stack-list" mt="2" pl="4">
        <ListItem>React JS</ListItem>
      </UnorderedList>
    </Box>
  );
}
