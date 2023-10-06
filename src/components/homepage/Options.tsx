import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import Marquee from "react-fast-marquee";
export default function Options() {
  const options = [
    {
      src: "https://www.narutodb.xyz/cards/characters.jpg",
      title: "Personagens",
      href: "",
    },
    {
      src: "https://www.narutodb.xyz/cards/clans.jpeg",
      title: "Clans",
      href: "",
    },
    {
      src: "https://www.narutodb.xyz/cards/villages.webp",
      title: "Vilas",
      href: "",
    },
    {
      src: "https://www.narutodb.xyz/cards/kekkeigenkai.avif",
      title: "Kgs",
      href: "",
    },
    {
      src: "https://www.narutodb.xyz/cards/tailedbeasts.webp",
      title: "Bestas de caudas",
      href: "",
    },
    {
      src: "https://www.narutodb.xyz/cards/teams.webp",
      title: "Times",
      href: "",
    },
    { src: "https://www.narutodb.xyz/cards/kara.png", title: "kara", href: "" },
    {
      src: "https://www.narutodb.xyz/cards/akatsuki.jpg",
      title: "Akatsuki",
      href: "",
    },
  ];
  return (
    <Flex
      overflowY={"hidden"}
      border="3px solid black"
      //  background={`linear-gradient(
      //    to top,
      //    #11111163,
      //    #ffffff39
      //  ),url(https://e1.pxfuel.com/desktop-wallpaper/63/621/desktop-wallpaper-naruto-manga-by-thatawesomedudeyeaah-1920x1080-for-your-mobile-tablet-manga-2021.jpg)`}
      backgroundSize="100% 100%"
      backgroundRepeat={"no-repeat"}
      position="relative"
      direction={"column"}
      justify={"center"}
      align={"center"}
      h="100%"
    >
      <Marquee pauseOnHover style={{ overflow: "hidden" }}>
        {options.map((o, i) => (
          <Link href="/">
            <Center textAlign={"center"} position={"relative"}>
              <Text
                fontWeight={"extrabold"}
                fontSize={"md"}
                color="black"
                textShadow={"1px 1px 0px #11111130"}
                zIndex={999}
                position="absolute"
                m="auto"
                textTransform={"uppercase"}
                bg="white"
                px={2}
                border="1px solid #fafafa8"
                boxShadow={"3px 3px 0px #11111186"}
              >
                {o.title}
              </Text>
              <Image
                borderLeft="2px solid black"
                borderRight="2px solid black"
                filter="grayscale(100%)"
                whileHover={{ scale: 1.02 }}
                as={motion.img}
                key={i}
                height={"120px"}
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
