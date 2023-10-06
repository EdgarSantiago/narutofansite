import { Character, CharactersProps } from "@/lib/types/characterType";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  chakra,
} from "@chakra-ui/react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import CharsSwiper from "./CharsSwiper";

export default function Characters({ characters }: CharactersProps) {
  return (
    <Flex direction={"column"} gap={2}>
      <Flex mb={"0px"} justify={"space-between"} align="center">
        <Heading
          color="white"
          position="relative"
          w="400px"
          fontSize={["md", "lg", "xl", "3xl"]}
          textTransform={"uppercase"}
        >
          <Image
            src="/brush.png"
            display="inline"
            position="absolute"
            top={"-60px"}
            left={"-50px"}
            height={"150px"}
            width={"400px"}
            zIndex={-999}
          />
          Personagens
        </Heading>
      </Flex>
      <Button
        w="20%"
        ml="auto"
        rounded="none"
        colorScheme="orange"
        bg="#fafafa"
        color="black"
        border="3px solid black"
        size="lg"
        _hover={{ color: "white", bg: "black" }}
        boxShadow="2px 2px 0px black"
      >
        Todos
      </Button>
      <CharsSwiper characters={characters} />
    </Flex>
  );
}
