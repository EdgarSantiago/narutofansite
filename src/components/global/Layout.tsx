import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import ThemeToggleButton from "./theme-toggle-button";
import { ParticlesContainer } from "./Particles";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container
      zIndex={9999}
      backdropFilter="auto"
      backdropBlur="8px"
      //bg={useColorModeValue("#fafafaec", "#111111ec")}
      pt={2}
      pb={50}
      maxW="4xl"
      borderLeft="6px solid black"
      borderRight="6px solid black"
      px={10}
    >
      <Flex position={"relative"} gap={4} direction="column">
        <Navbar />
        {children}
        <Footer />
      </Flex>
    </Container>
  );
}
