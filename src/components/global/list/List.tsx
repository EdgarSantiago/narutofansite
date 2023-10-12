import Title from "@/components/global/Title";
import { CharactersProps } from "@/lib/types/characterType";
import { Link } from "@chakra-ui/next-js";
import { Button, Flex, Heading, Image, Skeleton } from "@chakra-ui/react";

import dynamic from "next/dynamic";

const DynamicListSwiper = dynamic(() => import("./ListSwiper"), {
  loading: () => <Skeleton height="13rem" />,
  ssr: false, // Disable server-side rendering for this dynamic component
});

export interface listItem {
  id: string;
  name: string;
  images: [string];
}

export interface ListProps {
  title?: string;
  slug?: string;
  data: listItem[];
}

export default function List({ data, title, slug }: ListProps) {
  return (
    <Flex direction={"column"} gap={0}>
      <Flex mb={"20px"} justify={"space-between"} align="center">
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
        <Link
          w={["30%", "30%", "25%", "20%"]}
          bg="blue"
          href={`/search/${slug}`}
        >
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
      <DynamicListSwiper data={data} title={title} slug={slug} />
    </Flex>
  );
}
