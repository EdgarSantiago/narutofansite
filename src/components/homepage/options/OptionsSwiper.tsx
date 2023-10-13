import { Character, CharactersProps } from "@/lib/types/characterType";
import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import { options } from "@/lib/data/options";
import { motion } from "framer-motion";

export interface optionsItem {
  id: string;
  name: string;
  images: [string];
}

export interface OptionsProps {
  title?: string;
  slug?: string;
}

export default function OptionsSwiper({ title, slug }: OptionsProps) {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".chars-button-next-" + title,
          prevEl: ".chars-button-prev-" + title,
          disabledClass: "swiper-button-disabled",
        }}
        style={{ padding: "10px 0px" }}
        modules={[Autoplay, Pagination, Navigation, Mousewheel, FreeMode]}
        mousewheel={false}
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
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
      >
        {/*{data.map((character: optionsItem, i: number) => (
          <SwiperSlide key={i}>
            <OptionsCard data={character} slug={slug} />
          </SwiperSlide>
        ))}*/}
        {options.map((o, i) => (
          <SwiperSlide key={i}>
            <Link href={`/search/${o.slug}`} key={i}>
              <Flex height={"10rem"} textAlign={"center"} position={"relative"}>
                <Text
                  fontWeight={"extrabold"}
                  fontSize={["sm", "sm", "md", "lg"]}
                  color="black"
                  textShadow={"1px 1px 0px #11111130"}
                  zIndex={999}
                  position="absolute"
                  bottom={0}
                  m="auto"
                  textTransform={"uppercase"}
                  bg="white"
                  px={2}
                  border="3px solid black"
                  //boxShadow={"3px 3px 0px #11111186"}
                >
                  {o.title}
                </Text>
                <Image
                  loading="lazy"
                  border="2px solid black"
                  whileHover={{ scale: 1.02 }}
                  as={motion.img}
                  key={i}
                  height="100%"
                  src={o.src}
                  alt={o.title}
                />
              </Flex>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
