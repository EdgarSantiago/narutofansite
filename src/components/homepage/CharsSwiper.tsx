import { Character, CharactersProps } from "@/lib/types/characterType";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";

export default function CharsSwiper({ characters }: CharactersProps) {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".chars-button-next",
          prevEl: ".chars-button-prev",
          disabledClass: "swiper-button-disabled",
        }}
        style={{ padding: "10px 0px" }}
        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
        mousewheel={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={5}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          250: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
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
          borderTop="4px solid black"
        >
          <Text fontWeight={"bold"} fontSize={"md"}>
            {character.name}
          </Text>
        </Flex>
      </Box>
    </Link>
  );
}
