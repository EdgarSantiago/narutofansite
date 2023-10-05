import { chakra, Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

interface Character {
  name: string;
  images: [string];
  rank: { ninjaRank: any; ninjaRegistration: string };
}

interface CharactersProps {
  characters: Character[];
}

export default function Characters({ characters }: CharactersProps) {
  return (
    <Flex direction={"column"} gap={2}>
      <Heading fontSize={["md", "lg", "xl", "2xl"]}>
        Todos os Personagens
      </Heading>
      <SimpleGrid columns={[2, 2, 4, 5]} gap={[2, 2, 4, 4]}>
        {characters.map((character: Character, i: number) => (
          <CharacterCard key={i} character={character} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}

function CharacterCard({ character }: { character: Character }) {
  console.log(character.rank?.ninjaRank);
  const ranks = character.rank?.ninjaRank;

  return (
    <Box
      border="1px solid #111111"
      boxShadow="5px 5px 0px #1111114d"
      _hover={{
        transform: "scale(1.01)",
        boxShadow: "8px 8px 0px #FA9427",
        border: "1px solid #FA9427",
        cursor: "pointer",
      }}
      transition={"ease 0.2s"}
    >
      <Box
        minH="8rem"
        background={`linear-gradient(
        to top,
        #11111196,
        transparent
      ),url(${character.images[0] ? character.images[0] : ""})`}
        backgroundSize="100% 100%"
        backgroundRepeat={"no-repeat"}
        position="relative"
      ></Box>

      <Flex
        direction={"column"}
        justify="center"
        minH="5rem"
        w="100%"
        bottom={0}
        textAlign={"center"}
        p={2}
        fontSize="small"
      >
        <Text>
          <chakra.span fontWeight={"bold"} color="orange">
            Nome:
          </chakra.span>{" "}
          {character.name}
        </Text>
        {ranks && (
          <>
            {Object.entries(ranks).map(([rankName, rankValue], index) => (
              <Text key={index}>
                <chakra.span fontWeight={"bold"} color="orange">
                  Rank {rankName}:
                </chakra.span>{" "}
                {rankValue as string}
              </Text>
            ))}
          </>
        )}
      </Flex>
    </Box>
  );
}
