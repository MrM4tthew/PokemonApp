import Link from "next/link";
import Layout from "../src/layout";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import styled from "@emotion/styled";

const TypesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 200px 0px;

  .pokemon {
    background-color: #f0f0f0;
    height: 50px;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin: 0px 8px 8px 0px;
    position: relative;

    span {
      font-size: 14px;
      opacity: 0.6;
    }

    a {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
    }
  }
`;

export default function Home({ pokemonTypes }) {
  return (
    <Layout>
      <TypesContainer>
        {pokemonTypes.map((type, index) => (
          <div className="pokemon" key={index}>
            {/* <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${type.id}.png`}
            alt=""
          /> */}
            <span>{type.name}</span>
            <Link href={`/pokemons/${type.name}`}>
              <a></a>
            </Link>
          </div>
        ))}
      </TypesContainer>
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
