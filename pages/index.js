import Layout from "../src/layout";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import ListType from "../src/components/CategoryList";
import ListGeneration from "../src/components/GenerationList";
import HomeTopContainer from "../src/components/HomeTopContainer";

export default function Home({ pokemonTypes }) {
  return (
    <Layout>
      <HomeTopContainer />
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
      query {
        pokemon_v2_type {
          name
          id
        }
      }
    `,
  });

  return {
    props: {
      pokemonTypes: data.pokemon_v2_type,
    },
  };
}
