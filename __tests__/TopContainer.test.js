import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopContainer from "../src/components/PokemonDetail/TopContainer";
import { CatchContext } from "../context/CatchContext";

const customRender = (ui, { data, ...renderOptions }) => {
  return render(
    <CatchContext.Provider value={{ data }}>{ui}</CatchContext.Provider>,
    renderOptions
  );
};

test("Pokemon info is shown", () => {
  const data = {
    id: 1,
    name: "monster",
    pokemon_v2_pokemontypes: [
      {
        pokemon_v2_type: {
          name: "fire",
        },
      },
    ],
  };

  customRender(<TopContainer data={data} />, {});
  expect(screen.getByTitle("name")).toHaveTextContent("monster");
  expect(screen.getByTitle("pokemon-type")).toHaveTextContent("fire");
  expect(screen.getByAltText(/pokemon/i)).toHaveAttribute(
    "src",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  );
});
