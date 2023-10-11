import Layout from "@/components/global/Layout";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import ListCard from "@/components/global/list/ListCard";
import Title from "@/components/global/Title";
import { Flex, SimpleGrid, Skeleton } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const DynamicListCard = dynamic(
  () => import("@/components/global/list/ListCard"),
  {
    loading: () => <Skeleton height={["13rem"]} />,
    ssr: false, // Disable server-side rendering for this dynamic component
  }
);

export default function Characters({ chars }: { chars: any }) {
  const router = useRouter();

  // Parse the page number from router.query.page or default to 1
  const initialPage = Number(router.query.page) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage - 1);
  const pageSize = 20;
  const totalCharacters = chars.totalCharacters;

  const handlePageChange = (selectedPage: { selected: number }) => {
    if (selectedPage.selected + 1 === Number(router.query.page)) {
    } else {
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
          <DynamicListCard data={character} slug="character" />
        ))}
      </SimpleGrid>

      <ReactPaginate
        previousLabel={"Voltar"}
        nextLabel={"Próximo"}
        breakLabel={"..."}
        pageCount={Math.ceil(totalCharacters / pageSize)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
        forcePage={currentPage}
      />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page || "1"; // Get the page parameter from the query string or default to page 1.
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
