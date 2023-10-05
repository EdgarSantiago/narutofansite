import { Box, Container, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container pt={2} pb={50} maxW="6xl">
      {children}
    </Container>
  );
}
