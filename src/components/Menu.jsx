import { Box, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu() {
  return (
    <Box as="nav" className="menu-container" p="4">
      <Box as="ul" className="menu-list" listStyleType="none" display="flex">
        <Box as="li" className="menu-item" mr="4">
          <Link
            as={NavLink}
            to="/"
            className="menu-link"
            activeClassName="menu-link-active"
          >
            <Text fontSize="lg">Inicio</Text>
          </Link>
        </Box>
        <Box as="li" className="menu-item" mr="4">
          <Link
            as={NavLink}
            to="/ChatBot"
            className="menu-link"
            activeClassName="menu-link-active"
          >
            <Text fontSize="lg">Chat Ansiedad</Text>
          </Link>
        </Box>
        <Box as="li" className="menu-item">
          <Link
            as={NavLink}
            to="/AboutUs"
            className="menu-link"
            activeClassName="menu-link-active"
          >
            <Text fontSize="lg">Sobre nosotros</Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
