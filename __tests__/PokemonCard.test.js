import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonCard from "../src/components/PokemonList/PokemonCard";
import { CatchContext } from "../context/CatchContext";

const customRender = (ui, { data, ...renderOptions }) => {
  return render(
    <CatchContext.Provider value={{ data }}>{ui}</CatchContext.Provider>,
    renderOptions
  );
};

test("Pokemon owned count is 0 if user has not catch it", () => {
  const data = [
    {
      name: "rat",
    },
  ];

  const pokemon = {
    name: "bison",
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "fire",
        },
      },
    ],
  };

  customRender(<PokemonCard pokemon={pokemon} />, { data });
  expect(screen.getByText(/^Owned:/)).toHaveTextContent("Owned: 0");
});

test("Pokemon owned count is 1 if user has catch it once", () => {
  const data = [
    {
      name: "bison",
    },
  ];

  const pokemon = {
    name: "bison",
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "fire",
        },
      },
    ],
  };

  customRender(<PokemonCard pokemon={pokemon} />, { data });
  expect(screen.getByText(/^Owned:/)).toHaveTextContent("Owned: 1");
});

test("Pokemon owned count is more than 1 if user has catch it more", () => {
  const data = [
    {
      name: "bison",
    },
    {
      name: "bison",
    },
  ];

  const pokemon = {
    name: "bison",
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "fire",
        },
      },
    ],
  };

  customRender(<PokemonCard pokemon={pokemon} />, { data });
  expect(screen.getByText(/^Owned:/)).toHaveTextContent("Owned: 2");
});
