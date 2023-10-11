import Layout from "@/components/global/Layout";
import Title from "@/components/global/Title";
import ListCard from "@/components/global/list/ListCard";
import { SimpleGrid } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Characters({ chars }: { chars: any }) {
  const router = useRouter();
  const pageSize = 20;
  const totalCharacters = chars.totalCharacters;

  const handlePageChange = (selectedPage: { selected: number }) => {
    if (selectedPage.selected + 1 !== Number(router.query.page)) {
      const newPage = selectedPage.selected;
      // Programmatically update the URL with the new page
      router.push(`/character?page=${newPage + 1}`);
    }
  };

  return (
    <Layout>
      <Title>Personagens</Title>

      <SimpleGrid columns={5} gap={4}>
        {chars.characters.map((character: any) => (
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
        forcePage={Number(router.query.page) - 1}
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
