import dynamic from "next/dynamic";

const DynamicOptions = dynamic(
  () => import("@/components/homepage/options/Options"),
  {
    loading: () => <Skeleton height="10rem" />,
    ssr: false, // Disable server-side rendering for this dynamic component
  }
);

const DynamicSearch = dynamic(() => import("@/components/global/Search"), {
  loading: () => <Skeleton height={["25vh", "30vh", "40vh", "40vh"]} />,
  ssr: false, // Disable server-side rendering for this dynamic component
});

const DynamicCarousel = dynamic(
  () => import("@/components/homepage/Carousel"),
  {
    loading: () => <Skeleton height={["30vh", "30vh", "35vh", "35vh"]} />,
    ssr: false, // Disable server-side rendering for this dynamic component
  }
);

import Layout from "@/components/global/Layout";
import Carousel from "@/components/homepage/Carousel";
//import Search from "@/components/global/Search";
//import Options from "@/components/homepage/Options";
import List from "@/components/global/list/List";

import { Flex, Skeleton, Spinner } from "@chakra-ui/react";
import { GetStaticProps } from "next";

export default function Blog({
  chars,
  clans,
  kara,
  akatsuki,
  kgs,
  beasts,
  teams,
  villages,
}: {
  chars: any;
  clans: any;
  kara: any;
  akatsuki: any;
  kgs: any;
  beasts: any;
  teams: any;
  villages: any;
}) {
  //missing teams, villages
  const listData = [
    { slug: "character", title: "Personagens", data: chars.characters },
    { slug: "kara", title: "Kara", data: kara.kara },
    { slug: "akatsuki", title: "Akatsuki", data: akatsuki.akatsuki },
    { slug: "tailed-beast", title: "Bestas", data: beasts.tailedBeasts },
  ];

  return (
    <Layout>
      <DynamicCarousel />
      <DynamicOptions title="Opções" slug="options" />
      <Flex mt={"30px"} gap={[5, 5, 5, 20]} direction={"column"}>
        {listData.map((item, i) => (
          <List key={i} title={item.title} slug={item.slug} data={item.data} />
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

  //get kara https://narutodb.xyz/api/kara
  const res3 = await fetch("https://narutodb.xyz/api/kara");
  const kara = await res3.json();

  //get akatsuki https://narutodb.xyz/api/akatsuki
  const res4 = await fetch("https://narutodb.xyz/api/akatsuki");
  const akatsuki = await res4.json();

  //get beasts https://narutodb.xyz/api/tailed-beast
  const res6 = await fetch("https://narutodb.xyz/api/tailed-beast");
  const beasts = await res6.json();

  return {
    props: {
      chars: chars,
      kara: kara,
      akatsuki: akatsuki,
      beasts: beasts,
    },
  };
};
