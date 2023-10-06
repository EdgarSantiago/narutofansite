import { Character } from "@/lib/types/characterType";
import axios from "axios";
import { GetServerSideProps } from "next";

const CharacterDetail = ({ character }: { character: Character }) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.images[0]} alt={character.name} />
    </div>
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
