// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import { Flex, Heading, Image, Text, chakra } from "@chakra-ui/react";

export default function Carousel() {
  const images = [
    "https://wallpapercave.com/wp/wp4642400.jpg",
    "https://wallpapers.com/images/featured/naruto-shippuden-4k-1lnarxno8m1advxy.jpg",
    "https://wallpaper.dog/large/20544375.jpg",
    "https://pbs.twimg.com/media/FGlViuZX0AYFoMY.jpg:large",
    "https://wallpaper.dog/large/10993738.jpg",
    "https://mobimg.b-cdn.net/v3/fetch/2f/2f35b34c1f65862de1d09f4253c96482.jpeg",
    "https://wallpapercave.com/wp/wp2875008.jpg",
  ];
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i} style={{ position: "relative" }}>
            <Flex
              h={["30vh", "40vh", "50vh", "60vh"]}
              align={"center"}
              justify={"center"}
              w="100%"
              zIndex={999}
              color="white"
              textShadow="4px 4px 0px black"
              backgroundSize="100% 100%"
              backgroundRepeat={"no-repeat"}
            >
              {/*<Heading fontSize={["xl", "2xl", "3xl", "4xl"]}>
                Feito com ❤️ por{" "}
                <chakra.span color="#f2a30b">EdgarSantiago</chakra.span>
              </Heading>*/}
              <Image
                objectFit={"cover"}
                h={"100%"}
                w={"100%"}
                filter="grayscale(100%)"
                border="4px solid black"
                src={img}
                position={"relative"}
              />
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
