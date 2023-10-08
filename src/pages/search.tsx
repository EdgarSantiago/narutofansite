import Layout from "@/components/global/Layout";
import SearchInput from "@/components/search/SearchInput";
import { options } from "@/lib/data/options";
import {
  Avatar,
  chakra,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Search() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (title: any) => {
    setSelectedOption(title);
  };
  return (
    <Layout>
      <Heading>
        Oque você procura ?{" "}
        <chakra.span color="orange">
          {selectedOption && selectedOption}
        </chakra.span>
      </Heading>
      <SimpleGrid columns={4} gap={4}>
        {options.map((o, i) => (
          <Flex
            onClick={() => handleOptionClick(o.title)}
            border={"4px solid black"}
            as={motion.div}
            whileHover={{ scale: 1.05, cursor: "pointer" }}
            align={"center"}
            direction={"column"}
            gap={2}
          >
            <Image
              h="7rem"
              w="100%"
              borderBottom={"4px solid black"}
              filter={`${
                o.title === selectedOption ? "grayscale(0%)" : "grayscale(100%)"
              }`}
              alt={o.title}
              src={o.src}
            />
            <Text fontSize="lg" fontWeight="extrabold">
              {o.title}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
      {selectedOption && <SearchInput option={selectedOption} />}
    </Layout>
  );
}
