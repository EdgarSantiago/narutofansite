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
  chakra,
  Flex,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps } from "next";

const CharacterDetail = ({ character }: { character: Character }) => {
  console.log(character);

  // Function to render all parameters including arrays
  const renderCharacterParameters = (obj: any) => {
    return Object.entries(obj).map(([key, value]) => {
      if (Array.isArray(value)) {
        return (
          <AccordionItem>
            <AccordionButton _expanded={{ bg: "black", color: "white" }}>
              <chakra.strong fontSize="2xl">{key}:</chakra.strong>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <ul>
                {value.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </AccordionPanel>
          </AccordionItem>
        );
      } else if (typeof value === "object") {
        return (
          <AccordionItem p={0} key={key}>
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
          <AccordionItem p={0} key={key}>
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
          w="140px"
          src={character.images[0]}
          alt={character.name}
        />
        {/*<SimpleGrid mx="auto" columns={1} gap={10} w="80%">*/}
        <Accordion
          w="60%"
          mx="auto"
          border="4px solid black"
          defaultIndex={[0]}
          allowMultiple
        >
          {renderCharacterParameters(character)}
        </Accordion>
      </Flex>

      {/*</SimpleGrid>*/}
    </Layout>
  );
};

interface CharacterDetailProps {
  character: Character;
}

export const getServerSideProps: GetServerSideProps<
  CharacterDetailProps
> = async ({ params }) => {
  const { id } = params as { id: string };

  try {
    if (!id) {
      throw new Error("Character ID is missing.");
    }

    const response = await axios.get<Character>(
      `https://narutodb.xyz/api/character/${id}`
    );
    const character = response.data;

    return {
      props: { character },
    };
  } catch (error) {
    console.error("Error fetching character data:", error);
    return {
      notFound: true,
    };
  }
};

export default CharacterDetail;
