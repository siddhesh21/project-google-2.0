import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import { REACT_APP_API_KEY, REACT_APP_CONTEXT_KEY } from "../keys";
import Response from "../Response";

function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <SearchResults results={results} />
    </div>
  );
}

export default Search;

// SSR
export async function getServerSideProps(context) {
  const useDummyData = true;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${REACT_APP_API_KEY}&cx=${REACT_APP_CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  // After RENDERING of SERVER... PASS the search results to the USER
  return {
    props: {
      results: data,
    },
  };
}
