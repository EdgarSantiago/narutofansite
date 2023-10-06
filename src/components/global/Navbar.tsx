import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
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
      <Image h="30px" w="100px" src="/logonaru.png" />
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

  return <Icon fontSize={"32px"} as={icon} />;
}
