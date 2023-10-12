import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { AiFillAlert, AiFillFolderOpen } from "react-icons/ai";
import { GrDocumentMissing } from "react-icons/gr";

interface SearchInputProps {
  option?: string;
  slug?: string;
}

export default function SearchInput({ option, slug }: SearchInputProps) {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [error, setError] = useState<any>(""); // State to store the search query
  const [loading, setLoading] = useState<boolean>(false); // State to store the search query
  const [searchResults, setSearchResults] = useState<any>(undefined); // State to store search results

  const handleSearch = async (event: React.FormEvent) => {
    setLoading(true);
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
      setError("Personagem não encontrado");
      setSearchResults(undefined);
    }
    setLoading(false);
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
            isLoading={loading}
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
      {error && (
        <>
          <Flex
            border="4px solid black"
            p={4}
            justify={"space-between"}
            align="center"
          >
            <Text fontWeight={"bold"}>{error}</Text>
            <Icon as={GrDocumentMissing} boxSize={6} />
          </Flex>
        </>
      )}
      {searchResults ? (
        <>
          <Link href={`/${option}/${searchResults?.id}`}>
            <Flex
              _hover={{ bg: "black", color: "white", cursor: "pointer" }}
              border="4px solid black"
              p={4}
              justify={"space-between"}
              align="center"
            >
              <Text fontWeight={"bold"}>{searchResults?.name}</Text>
              <Icon as={AiFillFolderOpen} boxSize={6} />
            </Flex>
          </Link>
        </>
      ) : (
        <></>
      )}

      {/* Display search results */}
    </>
  );
}
