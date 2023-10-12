import Layout from "@/components/global/Layout";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import Title from "@/components/global/Title";
import { Box, Flex, SimpleGrid, Skeleton } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import SearchInput from "@/components/search/SearchInput";

const DynamicListCard = dynamic(
  () => import("@/components/global/list/ListCard"),
  {
    loading: () => <Skeleton height={["13rem"]} />,
    ssr: false, // Disable server-side rendering for this dynamic component
  }
);

export default function Characters({ data }: { data: any }) {
  const router = useRouter();

  // Parse the page number from router.query.page or default to 1
  const initialPage = Number(router.query.page) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage - 1);
  const pageSize = 20;
  const totalCharacters =
    data.totalCharacters ||
    data.totalMembers ||
    data.totalKara ||
    data.totalVillages ||
    data.totalTeams ||
    data.totalTailedBeasts ||
    data.totalKekkeiGenkai ||
    data.totalClans;
  const characterList =
    data.characters ||
    data.akatsuki ||
    data.kara ||
    data.villages ||
    data.teams ||
    data.tailedBeasts ||
    data.kekkeigenkai ||
    data.clans;

  const handlePageChange = (selectedPage: { selected: number }) => {
    const newPage = selectedPage.selected;

    if (newPage !== currentPage) {
      // Only update if the selected page is different
      // Programmatically update the URL with the new page
      router.push(`/search/${router.query.slug}?page=${newPage + 1}`);
    }
  };

  return (
    <Layout>
      <SearchInput
        option={String(router.query.slug)}
        slug={String(router.query.slug)}
      />

      <Title>Personagens</Title>
      <SimpleGrid columns={[2, 2, 3, 4, 6]} gap={[2, 2, 2, 3, 4]}>
        {characterList.map((character: any) => (
          <DynamicListCard
            key={character.id}
            data={character}
            slug={String(router.query.slug)}
          />
        ))}
      </SimpleGrid>

      {data ? (
        <Flex>
          <ReactPaginate
            previousLabel={"Voltar"}
            nextLabel={"Próximo"}
            breakLabel={"..."}
            renderOnZeroPageCount={null}
            pageCount={Math.ceil(totalCharacters / pageSize)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
            forcePage={currentPage}
          />
        </Flex>
      ) : null}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const page = context.query.page || "1"; // Get the page parameter from the query string or default to page 1.
  const limit = 20;

  try {
    const res = await fetch(
      `https://narutodb.xyz/api/${context.query.slug}?page=${page}&limit=${limit}`
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch data from the API`);
    }

    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      notFound: true,
    };
  }
};
