import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function MangaBox({ children }: { children: ReactNode }) {
  return (
    <Flex
      gap={2}
      direction={"column"}
      p={2}
      bg="white"
      border="4px solid black"
    >
      {children}
    </Flex>
  );
}
