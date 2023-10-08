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
}

export default function SearchInput({ option }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  const handleSearch = async () => {
    try {
      // Make an Axios GET request to the API
      const response = await axios.get(
        `https://narutodb.xyz/api/character/search?name=${searchQuery}`
      );

      // Check the response status code
      if (response.status === 200) {
        const data = response.data;
        setSearchResults(data); // Store the search results in state
      } else {
        // Handle non-200 status codes (e.g., 404 or 500)
        console.error(`Error: Request failed with status ${response.status}`);
      }
    } catch (error) {
      // Handle network errors or exceptions
      console.error("Error searching characters:", error);
    }
  };

  return (
    <>
      <InputGroup h="60px" size="md">
        <Input
          value={searchQuery}
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
      {/* Display search results */}
      <div>
        {searchResults.map((result: any) => (
          <div key={result.id}>
            {/* Display individual search results here */}
            <p>{result.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
