import { options } from "@/lib/data/options";
import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function Options() {
  return (
    <Flex
      overflowY={"hidden"}
      border="4px solid black"
      backgroundSize="100% 100%"
      backgroundRepeat={"no-repeat"}
      position="relative"
      direction={"column"}
      justify={"center"}
      align={"center"}
      h="100%"
      minH="15vh"
    >
      <Marquee pauseOnHover style={{ overflow: "hidden" }}>
        {options.map((o, i) => (
          <Link href={`/search/${o.slug}`} key={i}>
            <Center textAlign={"center"} position={"relative"}>
              <Text
                fontWeight={"extrabold"}
                fontSize={["sm", "sm", "md", "lg"]}
                color="black"
                textShadow={"1px 1px 0px #11111130"}
                zIndex={999}
                position="absolute"
                m="auto"
                textTransform={"uppercase"}
                bg="white"
                px={2}
                border="3px solid black"
                boxShadow={"3px 3px 0px #11111186"}
              >
                {o.title}
              </Text>
              <Image
                border="2px solid black"
                filter="grayscale(100%)"
                whileHover={{ scale: 1.05 }}
                as={motion.img}
                key={i}
                height={["15vh"]}
                src={o.src}
                alt={o.title}
              />
            </Center>
          </Link>
        ))}
      </Marquee>
    </Flex>
  );
}
