import { options } from "@/lib/data/options";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { IconType } from "react-icons";
import { HiOutlineMenu } from "react-icons/hi";

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
      <Link href="/">
        <Image h="30px" w="90px" src="/logonaru.png" />
      </Link>
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

      <Drawer onClose={onClose} isOpen={isOpen} size={"sm"}>
        <DrawerOverlay />
        <DrawerContent border="4px solid black" zIndex={999999999}>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction={"column"} gap={4}>
              {options.map((o, i) => (
                <Link key={i} href={`/${o.slug}`}>
                  <Text fontSize="2xl" fontWeight={"extrabold"}>
                    {o.title}
                  </Text>
                </Link>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
