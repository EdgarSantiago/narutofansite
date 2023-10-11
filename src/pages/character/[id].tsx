import Layout from "@/components/global/Layout";
import Title from "@/components/global/Title";
import { Character } from "@/lib/types/characterType";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { GetServerSideProps } from "next";

const CharacterDetail = ({ character }: { character: Character }) => {
  console.log(character);
  return (
    <Layout>
      <Title>{character.name}</Title>
      <Flex gap={[2, 3, 4, 5]}>
        <Image
          border="4px solid black"
          height="180px"
          w="180px"
          src={character.images[0]}
          alt={character.name}
        />
        <Box p={2} bg="white" w="100%" border="4px solid black">
          <Text>teste</Text>
        </Box>
      </Flex>
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
