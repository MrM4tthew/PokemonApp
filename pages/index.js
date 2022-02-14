import Layout from "../src/layout";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import ListType from "../src/components/CategoryList";
import HomeTopContainer from "../src/components/HomeTopContainer";

export default function Home({ pokemonTypes, pokemonGenerations }) {
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
        pokemon_v2_generation {
          name
        }
      }
    `,
  });

  return {
    props: {
      pokemonTypes: data.pokemon_v2_type,
      pokemonGenerations: data.pokemon_v2_generation,
    },
  };
}
