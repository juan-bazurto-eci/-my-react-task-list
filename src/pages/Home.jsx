import { Box, Heading, Text } from "@chakra-ui/react";
import "./Home.css";

export default function Home() {
  return (
    <Box className="container" p="4">
      <Heading className="title" size="xl">
        TASK TO DO MANAGER
      </Heading>
      <Text className="subtitle" fontSize="lg" mt="4">
        Welcome User... lets check your TASKS today
      </Text>
    </Box>
  );
}
