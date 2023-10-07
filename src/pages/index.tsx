import Layout from "@/components/global/Layout";
import Search from "@/components/global/Search";
import ThemeToggleButton from "@/components/global/theme-toggle-button";
import Carousel from "@/components/homepage/Carousel";
import Characters from "@/components/homepage/Characters";
import Options from "@/components/homepage/Options";
import MotionImg from "@/components/homepage/motionimgs/MotionImg";

import { Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";

export default function Blog({ data }: { data: any }) {
  return (
    <Layout>
      <MotionImg
        style={{ position: "absolute", top: "-5px", left: "-125px" }}
        src="https://seeklogo.com/images/C/cloud-akatsuki-logo-17E3DF7FAC-seeklogo.com.png"
        transition={{ repeat: Infinity, repeatDelay: 0, duration: 4 }}
        animate={{
          x: [0, 20, 0],
          y: [0, 2, 0],
        }}
        height="70px"
      />
      <Search />
      <Options />
      <Carousel />
      <Flex mt={"30px"} gap={[5, 5, 5, 20]} direction={"column"}>
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
