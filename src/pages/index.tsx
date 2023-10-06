import Layout from "@/components/global/Layout";
import Search from "@/components/global/Search";
import ThemeToggleButton from "@/components/global/theme-toggle-button";
import Carousel from "@/components/homepage/Carousel";
import Characters from "@/components/homepage/Characters";
import NarutoApi from "@/components/homepage/NarutoApi";
import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";

export default function Blog({ data }: { data: any }) {
  return (
    <Layout>
      <Carousel />
      <Search />

      <Flex mt={"100px"} gap={20} direction={"column"}>
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
