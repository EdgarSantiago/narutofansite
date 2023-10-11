import Layout from "@/components/global/Layout";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import ListCard from "@/components/global/list/ListCard";
import Title from "@/components/global/Title";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import CustomPagination from "@/components/character/CustomPagination";

export default function Characters({ chars }: { chars: any }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 20;
  const totalCharacters = chars.totalCharacters;

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const charactersOnPage = chars.characters.slice(startIndex, endIndex);

  const handlePageChange = (selectedPage: { selected: number }) => {
    console.log(selectedPage.selected);
    if (selectedPage.selected + 1 === Number(router.query.page)) {
      console.log("do nothing");
    } else {
      const newPage = selectedPage.selected;
      setCurrentPage(newPage);
      // Programmatically update the URL with the new page
      router.push(`/character?page=${newPage + 1}`);
    }
  };

  return (
    <Layout>
      <Title>Personagens</Title>

      <SimpleGrid columns={5} gap={4}>
        {charactersOnPage.map((character: any) => (
          <ListCard data={character} slug="character" />
        ))}
      </SimpleGrid>

      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={Math.ceil(totalCharacters / pageSize)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        forcePage={currentPage ? currentPage : Number(router.query.page) - 1}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page || "1";
  const limit = 20;

  try {
    const res = await fetch(
      `https://narutodb.xyz/api/character?page=${page}&limit=${limit}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data from the API`);
    }

    const chars = await res.json();

    return {
      props: {
        chars,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      notFound: true,
    };
  }
};
