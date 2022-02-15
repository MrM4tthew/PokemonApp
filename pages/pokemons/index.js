import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";
import Layout from "../../src/layout";
import PokemonList from "../../src/components/PokemonList";
import PokemonSearch from "../../src/components/PokemonSearch";
import { useState } from "react";

const Index = ({ pokemons }) => {
  const [search, setSearch] = useState(pokemons);

  // Search function
  const handleInputChange = (e) => {
    var value = e.target.value;
    var valueStr = value.toString().toLowerCase();
    var result = pokemons.filter((x) => x.name.includes(valueStr));
    setSearch(result);
  };

  return (
    <Layout>
      <PokemonSearch handleInputChange={handleInputChange} />
      <PokemonList pokemons={search} />
    </Layout>
  );
};

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query samplePokeAPIquery {
        pokemon_v2_pokemon {
          id
          name
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
              id
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      pokemons: data.pokemon_v2_pokemon,
    },
  };
}

export default Index;
