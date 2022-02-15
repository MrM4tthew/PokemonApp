import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";
import Layout from "../../../src/layout";
import PokemonList from "../../../src/components/PokemonList";
import PokemonSearch from "../../../src/components/PokemonSearch";
import { useState } from "react";

const Index = ({ pokemons, pokemonType }) => {
  const [search, setSearch] = useState(pokemons);
  const handleInputChange = (e) => {
    var value = e.target.value;
    var valueStr = value.toString().toLowerCase();
    var result = pokemons.filter((x) => x.name.includes(valueStr));
    setSearch(result);
  };

  return (
    <Layout page={pokemonType}>
      <PokemonSearch handleInputChange={handleInputChange} type={pokemonType} />
      <PokemonList pokemons={search} />
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

export default Index;
