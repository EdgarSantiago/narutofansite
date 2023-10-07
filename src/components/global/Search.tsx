import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Search() {
  return (
    <Flex
      border="4px solid black"
      background={`linear-gradient(
        to top,
        #11111163,
        #ffffff39
      ),url(https://e1.pxfuel.com/desktop-wallpaper/63/621/desktop-wallpaper-naruto-manga-by-thatawesomedudeyeaah-1920x1080-for-your-mobile-tablet-manga-2021.jpg)`}
      backgroundSize="100% 100%"
      backgroundRepeat={"no-repeat"}
      position="relative"
      direction={"column"}
      h={["25vh", "30vh", "40vh", "40vh"]}
      justify={"center"}
      align={"center"}
    >
      <Flex
        align={"center"}
        bg="#111111"
        backdropFilter="auto"
        backdropBlur="8px"
        border="3px solid #000000"
        my={4}
        _hover={{
          transform: "scale(1.01)",
          //boxShadow: "0px 0px 10px #FA9427",
          //border: "2px solid #FA9427",
          cursor: "pointer",
        }}
        transition={"ease 0.2s"}
        w={["90%", "90%", "80%", "70%", "70%"]}
        h={["25%", "20%", "15%", "15%"]}
        boxShadow="3px 3px 0px #11111186"
      >
        <InputGroup h="100%" size="md">
          <Input
            h="100%"
            bg="black"
            rounded="none"
            border="2px solid #111111"
            pr="4.5rem"
            placeholder="Procurar"
            _placeholder={{ opacity: 1, color: "#fafafab4", fontSize: [] }}
          />
          <InputRightElement h="100%" width="8rem">
            <Button
              color="white"
              bg="#FA9427"
              colorScheme="orange"
              shadow="md"
              h="100%"
              w="150px"
              size="sm"
              rounded="none"
              leftIcon={<Image src="/logo.png" height={5} />}
            ></Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Flex>
  );
}
