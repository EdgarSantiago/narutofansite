import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ThemeToggleButton from "./theme-toggle-button";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container
      zIndex={999}
      backdropFilter="auto"
      backdropBlur="8px"
      bg={useColorModeValue("#fafafa", "#111111ec")}
      pt={2}
      pb={5}
      maxW="4xl"
      borderLeft="6px solid black"
      borderRight="6px solid black"
      px={[2, 3, 4, 5, 10]}
      position="relative"
    >
      <Flex position={"relative"} gap={[2, 3, 4, 5]} direction="column">
        <Navbar />
        {children}
        <Footer />
      </Flex>
    </Container>
  );
}
