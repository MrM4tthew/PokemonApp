import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";
import Layout from "../../../src/layout";
import PokemonList from "../../../src/components/PokemonList";

const index = ({ pokemons, pokemonType }) => {
  return (
    <Layout>
      <PokemonList pokemons={pokemons} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { type } = params;

  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query samplePokeAPIquery($type: String!) {
        pokemon_v2_pokemon(
          where: {
            pokemon_v2_pokemontypes: {
              pokemon_v2_type: { name: { _eq: $type } }
            }
          }
          order_by: { id: asc }
        ) {
          name
          id
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    `,
    variables: {
      type: type,
    },
  });

  // console.log("data", data);

  return {
    props: {
      pokemons: data.pokemon_v2_pokemon,
      pokemonType: type,
    },
  };
}

export default index;
