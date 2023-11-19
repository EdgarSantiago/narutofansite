import Layout from "@/components/global/Layout";
import MangaBox from "@/components/global/MangaBox";
import Title from "@/components/global/Title";
import { Character } from "@/lib/types/characterType";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  chakra,
  Flex,
  Image,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";

const CharacterDetail = ({ data }: { data: Character }) => {
  const [loading, setloading] = useState(false);
  // Function to render all parameters including arrays
  const renderCharacterParameters = (obj: any) => {
    if (!obj) {
      return null; // or handle it in a way that makes sense for your application
    }

    return Object.entries(obj).map(([key, value]) => {
      if (Array.isArray(value)) {
        return (
          <AccordionItem key={key}>
            <AccordionButton _expanded={{ bg: "black", color: "white" }}>
              <chakra.strong fontSize="2xl">{key}:</chakra.strong>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <ul>
                {value.map((item, index) => (
                  <li key={index}>{item.name}</li>
                ))}
              </ul>
            </AccordionPanel>
          </AccordionItem>
        );
      } else if (typeof value === "object") {
        return (
          <AccordionItem key={key}>
            <AccordionButton _expanded={{ bg: "black", color: "white" }}>
              <chakra.strong fontSize="2xl">{key}:</chakra.strong>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p={0}>
              {renderCharacterParameters(value)}
            </AccordionPanel>
          </AccordionItem>
        );
      } else {
        return (
          <AccordionItem key={key}>
            <AccordionButton _expanded={{ bg: "black", color: "white" }}>
              <chakra.strong fontSize="2xl">{key}:</chakra.strong>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>{JSON.stringify(value)}</AccordionPanel>
          </AccordionItem>
        );
      }
    });
  };

  return (
    <Layout>
      {data ? (
        <Flex
          direction={"column"}
          minH="80vh"
          justify={"center"}
          gap={[2, 3, 4, 5]}
        >
          <Image
            mx="auto"
            border="4px solid black"
            height="140px"
            width="140px"
            src={data?.images?.[0] || "/no-image.jpg"}
            alt={data?.name}
          />
          {/*<SimpleGrid mx="auto" columns={1} gap={10} w="80%">*/}
          <Accordion
            w={["100%", "100%", "80%", "60%"]}
            mx="auto"
            border="4px solid black"
            defaultIndex={[0]}
            allowMultiple
          >
            {renderCharacterParameters(data)}
          </Accordion>
        </Flex>
      ) : (
        <Center minH="80vh" flexDirection={"column"} gap={4}>
          <Spinner size={"lg"} colorScheme="orange" />
          <Text fontSize={"2xl"}>Carregando</Text>
        </Center>
      )}

      {/*</SimpleGrid>*/}
    </Layout>
  );
};

interface CharacterDetailProps {
  data: Character;
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const endpoints = [
      { url: "https://narutodb.xyz/api/character", type: "character" },
      { url: "https://narutodb.xyz/api/clan", type: "clan" },
      { url: "https://narutodb.xyz/api/kara", type: "kara" },
      { url: "https://narutodb.xyz/api/village", type: "village" },
      { url: "https://narutodb.xyz/api/kekkei-genkai", type: "kekkei-genkai" },
      { url: "https://narutodb.xyz/api/tailed-beast", type: "tailed-beast" },
      { url: "https://narutodb.xyz/api/team", type: "team" },
      { url: "https://narutodb.xyz/api/akatsuki", type: "akatsuki" },
      // Add more endpoints as needed
    ];

    const paths = [];

    const fetchAndMapPaths = async (url: any, itemType: any) => {
      const response = await axios.get(url);
      const pageSize = response.data?.pageSize;
      const totalItems = response.data[`total${itemType}`];
      const totalPages = Math.ceil(totalItems / pageSize);

      const initialItems = response.data[itemType];
      const initialPaths = initialItems.map((item: any) => ({
        params: { id: item.id.toString(), slug: itemType },
      }));

      if (totalPages > 1) {
        const additionalPaths = [];

        for (let page = 2; page <= totalPages; page++) {
          const nextPageResponse = await axios.get(
            `${url}?currentPage=${page}&pageSize=${pageSize}`
          );
          const nextPageItems = nextPageResponse.data[itemType];

          const nextPagePaths = nextPageItems.map((item: any) => ({
            params: { id: item.id.toString(), slug: itemType },
          }));

          additionalPaths.push(...nextPagePaths);
        }

        return [...initialPaths, ...additionalPaths];
      }

      return initialPaths;
    };

    for (const endpoint of endpoints) {
      const entityPaths = await fetchAndMapPaths(endpoint.url, endpoint.type);
      paths.push(...entityPaths);
    }

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps<CharacterDetailProps> = async ({
  params,
}) => {
  const { id, slug } = params as { id: string; slug: string };

  try {
    if (!id) {
      throw new Error("Character ID is missing.");
    }

    const response = await axios.get<Character>(
      `https://narutodb.xyz/api/${slug}/${id}`
    );
    const data = response.data;

    return {
      props: { data },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
};
export default CharacterDetail;
