import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useContext, useState } from "react";
import Layout from "../../../../src/layout";
import styled from "@emotion/styled";
import ContentContainer from "../../../../src/components/PokemonDetail/ContentContainer";
import { CatchContext } from "../../../../context/CatchContext";
import { typesColor } from "../../../../src/info/typecolor";

const PokemonDetail = ({ pokemon }) => {
  const pokemonData = pokemon[0];

  const find = typesColor.find(
    (x) =>
      x.name === pokemonData.pokemon_v2_pokemontypes[0].pokemon_v2_type.name
  );
  const red = find.red;
  const blue = find.blue;
  const green = find.green;

  return (
    <Layout
      bannercolor={true}
      detailData={pokemonData}
      red={red}
      blue={blue}
      green={green}
    >
      <ContentContainer pokemonData={pokemonData} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const { pokemon } = params;

  const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query samplePokeAPIquery($name: String!) {
        pokemon_v2_pokemon(where: { name: { _eq: $name } }) {
          id
          name
          height
          weight
          base_experience
          pokemon_v2_pokemonstats {
            base_stat
            pokemon_v2_stat {
              name
            }
          }
          pokemon_v2_pokemonabilities {
            pokemon_v2_ability {
              name
            }
          }
          pokemon_v2_pokemonmoves {
            pokemon_v2_move {
              name
            }
          }
          pokemon_v2_pokemontypes {
            pokemon_v2_type {
              name
            }
          }
        }
      }
    `,
    variables: {
      name: pokemon,
    },
  });

  // console.log("data", data);

  return {
    props: {
      pokemon: data.pokemon_v2_pokemon,
    },
  };
}

export default PokemonDetail;
