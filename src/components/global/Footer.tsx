import {
  chakra,
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
import { BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { HiOutlineMenu } from "react-icons/hi";
import { MdAttachMoney, MdOutlineSchool } from "react-icons/md";
import { Url } from "url";
export default function Footer() {
  const router = useRouter;

  return (
    <Flex
      color="white"
      bg="black"
      shadow="md"
      p={2}
      justifyContent={"space-between"}
      gap={[2]}
      backdropFilter="auto"
      backdropBlur="8px"
      border="3px solid black"
      align="center"
    >
      <Heading fontSize="md">
        © 2023 By - <chakra.span color="red">EdgarSantiago</chakra.span>
      </Heading>
      <Flex gap={4}>
        <ButtonFooter link="/" text="Akatsuki" icon={BsInstagram} />
        <ButtonFooter link="/" text="Akatsuki" icon={BsWhatsapp} />
        <ButtonFooter link="/" text="Akatsuki" icon={BsTwitter} />
      </Flex>
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
