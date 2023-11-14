// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  chakra,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Carousel() {
  const data = [
    {
      title: "Bem vindo!!!",
      description: (
        <>
          <Text fontWeight={"bold"} fontSize={["md", "xl", "2xl", "2xl"]}>
            Oi, eu sou o Edgar! Este site é o lugar onde você encontrará tudo
            sobre o anime Naruto.
          </Text>
        </>
      ),
      url: "https://wallpapercave.com/wp/wp4642400.jpg",
    },
    {
      title: "Sobre o site",
      description: (
        <>
          <Text fontWeight={"bold"} fontSize={["md", "xl", "2xl", "2xl"]}>
            Criei este site porque sou um grande fã de Naruto e para
            compartilhar minha paixão e diversão com outros fãs! 😃
          </Text>
        </>
      ),
      url: "https://wallpapers.com/images/featured/naruto-shippuden-4k-1lnarxno8m1advxy.jpg",
    },

    {
      title: "Código aberto",
      description: (
        <>
          <Text fontWeight="bold" fontSize={["md", "xl", "2xl", "2xl"]}>
            Se você deseja ver como este site foi desenvolvido, pode encontrar o
            código-fonte no meu{" "}
            <Link
              style={{ color: "blue", textDecoration: "underline" }}
              href="https://github.com/EdgarSantiago"
            >
              GitHub
            </Link>
            . Não se esqueça de deixar uma ⭐!
          </Text>
        </>
      ),
      url: "https://pbs.twimg.com/media/FGlViuZX0AYFoMY.jpg:large",
    },
    {
      title: "Técnologias",
      description: (
        <>
          <Text fontWeight={"bold"} fontSize={["md", "xl", "2xl", "2xl"]}>
            Para criar este site eu utilizei: Typescript, Nextjs e chakra-ui.
          </Text>
        </>
      ),
      url: "https://pbs.twimg.com/media/FGlViuZX0AYFoMY.jpg:large",
    },
    {
      title: "API utilizada",
      description: (
        <>
          <Text fontWeight="bold" fontSize={["md", "xl", "2xl", "2xl"]}>
            A API não foi desenvolvida por mim; eu utilizei o{" "}
            <Link
              style={{ color: "orange", textDecoration: "underline" }}
              href="https://www.narutodb.xyz/docs"
            >
              NarutoDB
            </Link>{" "}
            para obter as informações.
          </Text>
        </>
      ),
      url: "https://wallpaper.dog/large/20544375.jpg",
    },
    {
      title: "Api incompleta",
      description: (
        <>
          <Text fontWeight={"bold"} fontSize={["md", "xl", "2xl", "2xl"]}>
            No site, você pode notar que algumas informações não têm imagens.
            Parece que o criador da API ainda não as adicionou ainda.
          </Text>
        </>
      ),
      url: "https://pbs.twimg.com/media/FGlViuZX0AYFoMY.jpg:large",
    },
  ];
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 30000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {data.map((data, i) => (
          <SwiperSlide key={i} style={{ position: "relative" }}>
            <Flex
              color="black"
              h={["30vh", "40vh", "45vh", "50vh"]}
              align={"center"}
              justify={"center"}
              w="100%"
              backgroundSize="100% 100%"
              backgroundRepeat={"no-repeat"}
              position={"relative"}
            >
              <Center
                flexDirection={"column"}
                zIndex={999}
                position={"absolute"}
                bg="white"
                p={4}
                border="4px solid black"
                w="80%"
              >
                <Heading fontSize={["lg", "2xl", "3xl", "4xl"]}>
                  {data.title}
                </Heading>

                {data.description}
              </Center>
              <Image
                objectFit={"cover"}
                h={"100%"}
                w={"100%"}
                filter="grayscale(100%)"
                border="4px solid black"
                src={data.url}
                position={"relative"}
              />
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
