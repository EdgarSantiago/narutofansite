import Layout from "@/components/global/Layout";
import { options } from "@/lib/data/options";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Search() {
  return (
    <Layout>
      <SimpleGrid columns={4} gap={4}>
        {options.map((o, i) => (
          <Flex
            _hover={{ cursor: "pointer" }}
            align={"center"}
            direction={"column"}
            gap={2}
            border={"4px solid black"}
          >
            <Image
              h="8rem"
              w="100%"
              borderBottom={"4px solid black"}
              filter="grayscale(100%)"
              alt={o.title}
              src={o.src}
            />
            <Text fontSize="lg" fontWeight="extrabold">
              {o.title}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
      {/*<InputGroup h="60px" size="md">
        <Input
          color="white"
          autoFocus
          h="100%"
          bg="black"
          rounded="none"
          border="2px solid #111111"
          placeholder="Procurar"
          _placeholder={{ opacity: 1, color: "#fafafab4", fontSize: [] }}
        />
        <InputRightElement h="100%" width={["5rem", "5rem", "6rem", "8rem"]}>
          <Button
            color="white"
            bg="#f2a30b"
            colorScheme="orange"
            shadow="md"
            h="100%"
            w={["120px", "120px", "130px", "150px"]}
            size="sm"
            rounded="none"
            leftIcon={
              <Image
                src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/naruto-512.png"
                height={8}
              />
            }
          ></Button>
        </InputRightElement>
      </InputGroup>*/}
    </Layout>
  );
}
