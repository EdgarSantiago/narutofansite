import dynamic from "next/dynamic";

const DynamicOptions = dynamic(() => import("@/components/homepage/Options"), {
  loading: () => <Skeleton height="15vh" />,
  ssr: false, // Disable server-side rendering for this dynamic component
});

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
import List from "@/components/homepage/list/List";
import MotionImg from "@/components/homepage/motionimgs/MotionImg";

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
    //{ slug: "tailed-beast", title: "Bestas", data: beasts.tailedBeasts },
    //{ slug: "kekkei-genkai", title: "Kekkei Genkai", data: kgs.kekkeigenkai },
    //{ slug: "clan", title: "Clans", data: clans.clans },
    //{ slug: "village", title: "Vilas", data: villages.villages },
    //{ slug: "team", title: "Times", data: teams.teams },
  ];

  return (
    <Layout>
      {/*<MotionImg
        style={{
          zIndex: 9999,
          position: "absolute",
          top: "-5px",
          left: "-125px",
        }}
        src="https://seeklogo.com/images/C/cloud-akatsuki-logo-17E3DF7FAC-seeklogo.com.png"
        transition={{ repeat: Infinity, repeatDelay: 0, duration: 4 }}
        animate={{
          x: [0, 20, 0],
          y: [0, 2, 0],
        }}
        height="70px"
      />*/}
      <DynamicSearch />
      <DynamicOptions />
      <DynamicCarousel />
      <Flex mt={"30px"} gap={[5, 5, 5, 20]} direction={"column"}>
        {listData.map((item, index) => (
          <List
            key={index}
            title={item.title}
            slug={item.slug}
            data={item.data}
          />
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

  //get teams https://narutodb.xyz/api/team
  const res7 = await fetch("https://narutodb.xyz/api/team");
  const teams = await res7.json();
  //get teams https://narutodb.xyz/api/team
  const res8 = await fetch("https://narutodb.xyz/api/village");
  const villages = await res8.json();
  return {
    props: {
      chars: chars,
      clans: clans,
      kara: kara,
      akatsuki: akatsuki,
      kgs: kgs,
      beasts: beasts,
      teams: teams,
      villages: villages,
    },
  };
};
