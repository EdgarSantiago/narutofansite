import Layout from "@/components/global/Layout";
import { GetServerSideProps } from "next";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";

export default function Characters({ chars }: { chars: any }) {
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 20;
  const totalCharacters = chars.totalCharacters;

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const charactersOnPage = chars.characters.slice(startIndex, endIndex);

  const router = useRouter();

  const handlePageChange = (selectedPage: { selected: number }) => {
    const newPage = selectedPage.selected;
    setCurrentPage(newPage);

    // Programmatically update the URL with the new page
    router.push(`/character?page=${newPage + 1}`);
  };

  return (
    <Layout>
      <h1>Todos os personagens</h1>

      {charactersOnPage.map((character: any) => (
        <div key={character.id}>{character.name}</div>
      ))}

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
