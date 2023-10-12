import { Character, CharactersProps } from "@/lib/types/characterType";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import ListCard from "./ListCard";

export interface listItem {
  id: string;
  name: string;
  images: [string];
}

export interface ListProps {
  title?: string;
  slug?: string;
  data: listItem[];
}

export default function ListSwiper({ data, title, slug }: ListProps) {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".chars-button-next-" + title,
          prevEl: ".chars-button-prev-" + title,
          disabledClass: "swiper-button-disabled",
        }}
        style={{ padding: "10px 0px" }}
        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
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
            slidesPerView: 7,
            spaceBetween: 5,
          },
        }}
      >
        {data.map((character: listItem, i: number) => (
          <SwiperSlide key={i}>
            <ListCard data={character} slug={slug} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
