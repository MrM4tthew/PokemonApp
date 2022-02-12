import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { useState } from "react";
import Layout from "../../../../src/layout";
// import Button from "../../src/components/Button";

const pokemonDetail = ({ pokemon }) => {
  const [status, setStatus] = useState(false);
  const pokemonData = pokemon[0];

  //   console.log(Math.random() < 0.5);
  console.log("status", status);

  const catchPokemon = () =>
    Math.random() < 0.5 == true ? setStatus(true) : setStatus(false);
  //   const catchPokemon = () => {
  //     if (Math.random() < 0.5 == true) {
  //       setStatus(true);
  //     } else {
  //       setStatus(false);
  //     }
  //   };

  return (
    <Layout>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
        alt=""
      />
      <span>{pokemonData.name}</span>
      <button onClick={catchPokemon}>Catch</button>
      {/* <Button name="Catch" type="primary" /> */}
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

export default pokemonDetail;
