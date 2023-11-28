import { Box, Heading } from "@chakra-ui/react";
import "./Header.css";

const Header = () => {
  return (
    <Box as="header" p="4">
      <Heading as="h1" size="xl">
        ChatBot
      </Heading>
    </Box>
  );
};

export default Header;
