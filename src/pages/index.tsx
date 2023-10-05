import Layout from "@/components/global/Layout";
import ThemeToggleButton from "@/components/global/theme-toggle-button";
import Characters from "@/components/index/Characters";
import { GetStaticProps } from "next";

export default function Blog({ data }: { data: any }) {
  return (
    <Layout>
      <ThemeToggleButton />
      <Characters characters={data.characters} />
    </Layout>
  );
}
2;

export const getStaticProps: GetStaticProps = async () => {
  // Call an external API endpoint to get data.
  // You can use any data fetching library
  const res = await fetch("https://narutodb.xyz/api/character");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
