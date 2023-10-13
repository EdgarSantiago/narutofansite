import Layout from "@/components/global/Layout";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import Title from "@/components/global/Title";
import { Box, Flex, Image, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import SearchInput from "@/components/search/SearchInput";
import Link from "next/link";
import { motion } from "framer-motion";
import { options } from "@/lib/data/options";

const DynamicListCard = dynamic(
  () => import("@/components/global/list/ListCard"),
  {
    loading: () => <Skeleton height={["13rem"]} />,
    ssr: false, // Disable server-side rendering for this dynamic component
  }
);

export default function Characters({ data }: { data: any }) {
  return (
    <Layout>
      <Title>Opções</Title>
      <SimpleGrid columns={[2, 2, 3, 4]} gap={[2, 2, 2, 3, 4]}>
        {options.map((o, i) => (
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
        ))}
      </SimpleGrid>
    </Layout>
  );
}
