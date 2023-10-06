import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Show,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconType } from "react-icons";
import { AiOutlineHome } from "react-icons/ai";
import { CgGames } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { MdAttachMoney, MdOutlineSchool } from "react-icons/md";
import { Url } from "url";
export default function Navbar() {
  const router = useRouter;

  return (
    <Flex
      position={"sticky"}
      top={0}
      zIndex={9999}
      p={4}
      justifyContent={"space-between"}
      gap={[2]}
      backdropFilter="auto"
      backdropBlur="8px"
      border="3px solid black"
      align="center"
      bg="black"
      color="white"
    >
      <Heading fontSize="md">Naruto site</Heading>
      <ButtonFooter link="/placar" text="Akatsuki" icon={HiOutlineMenu} />
    </Flex>
  );
}

function ButtonFooter({
  text,
  icon,
  link = "/",
  gamer = false,
  href,
}: {
  text: string;
  icon?: IconType;
  link?: string;
  gamer?: boolean;
  href?: string;
}) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };

  return (
    <Flex
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      boxShadow={gamer ? "0px 0px 4px #e91414" : ""}
      bg={gamer ? "#e91414" : ""}
      color={useColorModeValue("#fafafa", "#fafafa")}
      rounded="md"
      textAlign={"center"}
    >
      <Icon fontSize={"24px"} as={icon} />
    </Flex>
  );
}
