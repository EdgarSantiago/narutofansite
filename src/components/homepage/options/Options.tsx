import Title from "@/components/global/Title";
import { CharactersProps } from "@/lib/types/characterType";
import { Link } from "@chakra-ui/next-js";
import { Button, Flex, Heading, Image, Skeleton } from "@chakra-ui/react";

import dynamic from "next/dynamic";

const DynamicOptionsSwiper = dynamic(() => import("./OptionsSwiper"), {
  loading: () => <Skeleton height="13rem" />,
  ssr: false, // Disable server-side rendering for this dynamic component
});

export interface optionsItem {
  id: string;
  name: string;
  images: [string];
}

export interface OptionsProps {
  title?: string;
  slug?: string;
}

export default function Opstions({ title, slug }: OptionsProps) {
  return (
    <Flex direction={"column"} gap={0}>
      <Flex my={"20px"} justify={"space-between"} align="center">
        <Title>{title}</Title>
      </Flex>
      <Flex gap={1} justify={"end"}>
        <Button
          className={"chars-button-prev-" + title}
          w={["5%"]}
          ml="auto"
          rounded="none"
          colorScheme="orange"
          bg="#fafafa"
          color="black"
          border="3px solid black"
          size={["md", "md", "lg", "lg"]}
          _hover={{ color: "white", bg: "black" }}
          boxShadow="2px 2px 0px black"
        >
          {"<"}
        </Button>
        <Button
          className={"chars-button-next-" + title}
          w={["5%"]}
          rounded="none"
          colorScheme="orange"
          bg="#fafafa"
          color="black"
          border="3px solid black"
          size={["md", "md", "lg", "lg"]}
          _hover={{ color: "white", bg: "black" }}
          boxShadow="2px 2px 0px black"
        >
          {">"}
        </Button>
        <Link w={["30%", "30%", "25%", "20%"]} bg="blue" href={`/search`}>
          <Button
            w={["100%"]}
            rounded="none"
            colorScheme="orange"
            bg="#fafafa"
            color="black"
            border="3px solid black"
            size={["md", "md", "lg", "lg"]}
            _hover={{ color: "white", bg: "black" }}
            boxShadow="2px 2px 0px black"
          >
            Todos
          </Button>
        </Link>
      </Flex>
      <DynamicOptionsSwiper title={title} slug={slug} />
    </Flex>
  );
}
