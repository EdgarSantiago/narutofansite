export interface Character {
  id: string;
  name: string;
  images: [string];
  rank: { ninjaRank: any; ninjaRegistration: string };

  debut: {
    madeBy: string;
  };
  personal: {};
  family: {};
  jutsu: string[];
  natureType: string[];
  uniqueTraits: string[];
  voiceActors: {
    [language: string]: string;
  };
}

export interface CharactersProps {
  characters: Character[];
}
