import Link from "next/link";
import Layout from "../src/layout";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import ListType from "../src/components/CategoryList";

export default function Home({ pokemonTypes }) {
  return (
    <Layout>
      <ListType types={pokemonTypes} />
    </Layout>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query samplePokeAPIquery {
        pokemon_v2_type {
          name
          id
        }
      }
    `,
  });

  // console.log("data", data);

  return {
    props: {
      pokemonTypes: data.pokemon_v2_type,
    },
  };
}
