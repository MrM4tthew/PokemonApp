import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Link from "next/link";
import Layout from "../../src/layout";
import PokemonList from "../../src/components/PokemonList";

const index = ({ pokemons }) => {
  console.log("pokemon", pokemons);

  return (
    <Layout>
      <PokemonList pokemons={pokemons} />
      {/* {pokemons.map((pokemon, index) => (
        <div key={index}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            alt=""
          />
          <span>{pokemon.name}</span>
          <Link href={`/pokemons/`}>
            <a>Detail</a>
          </Link>
        </div>
      ))} */}
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
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
            }
          }
        }
      }
    `,
  });

  // console.log("data", data);

  return {
    props: {
      pokemons: data.pokemon_v2_pokemon,
    },
  };
}

export default index;
