import {
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

interface SearchInputProps {
  option?: string;
  slug?: string;
}

export default function SearchInput({ option, slug }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [error, setError] = useState<any>(""); // State to store the search query
  const [searchResults, setSearchResults] = useState<any>({}); // State to store search results

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      // Make an Axios GET request to your Next.js API route
      const response = await axios.get(
        `/api/search?name=${searchQuery}&slug=${slug}`
      );
      // Handle the response data
      if (response.status === 200) {
        const data = response.data;

        setSearchResults(data);
        setError(undefined); // Store the search results in state
      } else {
        // Handle non-200 status codes (e.g., 404 or 500)
        console.error(`Error: Request failed with status ${response.status}`);
        setSearchResults(undefined);
      }
    } catch (error) {
      // Handle network errors or exceptions
      console.log("esse erro:" + error);
      setError("Personagem não encontrado");
      setSearchResults(undefined);
    }
  };

  return (
    <>
      <InputGroup border={"4px solid black"} h="60px" size="md">
        <Input
          onChange={(e) => setSearchQuery(e.target.value)}
          color="white"
          autoFocus
          h="100%"
          bg="black"
          rounded="none"
          border="2px solid #111111"
          placeholder={`Procurar ${option}`}
          _placeholder={{ opacity: 1, color: "#fafafab4", fontSize: [] }}
        />
        <InputRightElement h="100%" width={["5rem", "5rem", "6rem", "8rem"]}>
          <Button
            onClick={handleSearch}
            color="white"
            bg="#f2a30b"
            colorScheme="orange"
            shadow="md"
            h="100%"
            w={["120px", "120px", "130px", "150px"]}
            size="sm"
            rounded="none"
            leftIcon={
              <Image
                src="https://cdn3.iconfinder.com/data/icons/brands-applications/512/naruto-512.png"
                height={8}
              />
            }
          ></Button>
        </InputRightElement>
      </InputGroup>
      {error && error}
      {searchResults && searchResults.name}
      {/* Display search results */}
    </>
  );
}
