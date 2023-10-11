import { Character, CharactersProps } from "@/lib/types/characterType";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { listItem } from "./ListSwiper";
export default function ListCard({
  data,
  slug,
}: {
  data: listItem;
  slug?: string;
}) {
  return (
    <Link href={`/${slug}/${data.id}`}>
      <Box
        zIndex={9999}
        border="4px solid black"
        _hover={{
          transform: "scale(1.05)",
          cursor: "pointer",
        }}
        transition={"ease 0.2s"}
      >
        <Box
          minH="8rem"
          w="100%"
          background={`linear-gradient(
      to top,
      transparent,
      #1111113c
    ),url(${data.images && data.images.length > 0 ? data.images[0] : ""})`}
          backgroundSize="100% 100%"
          backgroundRepeat="no-repeat"
          position="relative"
        ></Box>

        <Flex
          direction={"column"}
          justify="center"
          minH="5rem"
          w="100%"
          bottom={0}
          textAlign={"center"}
          p={2}
          fontSize="small"
          borderTop="4px solid black"
        >
          <Text fontWeight={"bold"} fontSize={"md"}>
            {data.name}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
}
