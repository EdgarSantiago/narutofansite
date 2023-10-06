import { Character, CharactersProps } from "@/lib/types/characterType";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";

export default function CharsSwiper({ characters }: CharactersProps) {
  console.log(characters);
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        navigation={{ enabled: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={5}
        slidesPerView={5}
        style={{ padding: "10px 0px" }}
      >
        {characters.map((character: Character, i: number) => (
          <SwiperSlide key={i}>
            <CharacterCard character={character} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

function CharacterCard({ character }: { character: Character }) {
  const ranks = character.rank?.ninjaRank;

  return (
    <Link href={`/character/${character.id}`}>
      <Box
        zIndex={9999}
        border="3px solid black"
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
        ),url(${character.images[0] ? character.images[0] : ""})`}
          backgroundSize="100% 100%"
          backgroundRepeat={"no-repeat"}
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
          borderTop="3px solid black"
        >
          <Text fontWeight={"bold"} fontSize={"md"}>
            {character.name}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
}
