import Layout from "@/components/global/Layout";
import Search from "@/components/global/Search";
import Carousel from "@/components/homepage/Carousel";
import Options from "@/components/homepage/Options";
import List from "@/components/homepage/list/List";
import MotionImg from "@/components/homepage/motionimgs/MotionImg";

import { Flex } from "@chakra-ui/react";
import { GetStaticProps } from "next";

export default function Blog({
  chars,
  clans,
  kara,
  akatsuki,
  kgs,
  beasts,
}: {
  chars: any;
  clans: any;
  kara: any;
  akatsuki: any;
  kgs: any;
  beasts: any;
}) {
  const listData = [
    { title: "Personagens", data: chars.characters },
    { title: "Kara", data: kara.kara },
    { title: "Akatsuki", data: akatsuki.akatsuki },
    { title: "Bestas", data: beasts.tailedBeasts },
    { title: "Kekkei Genkai", data: kgs.kekkeigenkai },
    { title: "Clans", data: clans.clans },
  ];

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
        {listData.map((item, index) => (
          <List key={index} title={item.title} data={item.data} />
        ))}
      </Flex>
    </Layout>
  );
}
2;

export const getStaticProps: GetStaticProps = async () => {
  //get chars
  const res = await fetch("https://narutodb.xyz/api/character");
  const chars = await res.json();
  //get clans https://narutodb.xyz/api/clan
  const res2 = await fetch("https://narutodb.xyz/api/clan");
  const clans = await res2.json();

  //get kara https://narutodb.xyz/api/kara
  const res3 = await fetch("https://narutodb.xyz/api/kara");
  const kara = await res3.json();

  //get akatsuki https://narutodb.xyz/api/akatsuki
  const res4 = await fetch("https://narutodb.xyz/api/akatsuki");
  const akatsuki = await res4.json();

  //get akatsuki https://narutodb.xyz/api/kekkei-genkai
  const res5 = await fetch("https://narutodb.xyz/api/kekkei-genkai");
  const kgs = await res5.json();

  //get beasts https://narutodb.xyz/api/tailed-beast
  const res6 = await fetch("https://narutodb.xyz/api/tailed-beast");
  const beasts = await res6.json();
  return {
    props: {
      chars: chars,
      clans: clans,
      kara: kara,
      akatsuki: akatsuki,
      kgs: kgs,
      beasts: beasts,
    },
  };
};
