import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  Image,
  Show,
  Text,
  transition,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
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
      <Image h="30px" w="90px" src="/logonaru.png" />
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Icon
        _hover={{ color: "white", cursor: "pointer", transform: "scale(1.1)" }}
        transition="ease-in-out 0.2s"
        fontSize={"32px"}
        as={icon}
        onClick={onOpen}
      />

      <Drawer onClose={onClose} isOpen={isOpen} size={"lg"}>
        <DrawerOverlay />
        <DrawerContent border="4px solid black" zIndex={999999999}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
