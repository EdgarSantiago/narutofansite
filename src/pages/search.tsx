import Layout from "@/components/global/Layout";
import SearchInput from "@/components/search/SearchInput";
import { options } from "@/lib/data/options";
import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Search() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionSlug, setSelectedOptionSlug] = useState("");

  const handleOptionClick = (title: any, slug: any) => {
    setSelectedOption(title);
    setSelectedOptionSlug(slug);
  };
  return (
    <Layout>
      <Flex
        background={`linear-gradient(
        to top,
        #111111a4,
        #11111191
      ),url(https://e1.pxfuel.com/desktop-wallpaper/63/621/desktop-wallpaper-naruto-manga-by-thatawesomedudeyeaah-1920x1080-for-your-mobile-tablet-manga-2021.jpg)`}
        backgroundSize="100% 100%"
        backgroundRepeat={"no-repeat"}
        direction={"column"}
        gap={4}
        p={4}
        border={"4px solid black"}
      >
        <Box w="100%">
          <Heading
            textShadow="2px 2px 2px black"
            color="white"
            fontSize={"4xl"}
          >
            Oque você procura ?{" "}
            <chakra.span color="orange">
              {selectedOption && selectedOption}
            </chakra.span>
          </Heading>
        </Box>
        <SimpleGrid w="100%" columns={4} gap={4}>
          {options.map((o, i) => (
            <Flex
              key={i}
              onClick={() => handleOptionClick(o.title, o.slug)}
              border={"4px solid black"}
              bg={`${o.title === selectedOption ? "black" : "white"}`}
              color={`${o.title === selectedOption ? "white" : "black"}`}
              as={motion.div}
              whileHover={{ scale: 1.05, cursor: "pointer" }}
              align={"center"}
              direction={"column"}
              gap={2}
            >
              <Image
                h="6rem"
                w="100%"
                borderBottom={"4px solid black"}
                filter={`${
                  o.title === selectedOption
                    ? "grayscale(0%)"
                    : "grayscale(100%)"
                }`}
                alt={o.title}
                src={o.src}
              />
              <Text px={20} fontSize="lg" fontWeight="extrabold">
                {o.title}
              </Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Flex>
      {selectedOption && (
        <SearchInput option={selectedOption} slug={selectedOptionSlug} />
      )}
    </Layout>
  );
}
