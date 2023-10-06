import Layout from "@/components/global/Layout";
import Search from "@/components/global/Search";
import ThemeToggleButton from "@/components/global/theme-toggle-button";
import Carousel from "@/components/homepage/Carousel";
import Characters from "@/components/homepage/Characters";
import Options from "@/components/homepage/Options";

import { Flex, Image } from "@chakra-ui/react";
import { GetStaticProps } from "next";

export default function Blog({ data }: { data: any }) {
  return (
    <Layout>
      <Image
        position={"absolute"}
        top={"100px"}
        left={"-200px"}
        width={"25px"}
        height={"25px"}
        src="https://down-br.img.susercontent.com/file/4c44324bbcc958bbd79db1a419633526"
      />
      <Options />
      <Search />
      <Carousel />
      <Flex mt={"50px"} gap={20} direction={"column"}>
        <Characters characters={data.characters} />
        <Characters characters={data.characters} />
        <Characters characters={data.characters} />
      </Flex>
    </Layout>
  );
}
2;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://narutodb.xyz/api/character");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
