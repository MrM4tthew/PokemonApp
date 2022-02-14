import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OwnedPokemonCard from "../src/components/PersonalList/OwnedPokemonCard";
import { CatchContext } from "../context/CatchContext";

const customRender = (ui, { deletePokemon, ...renderOptions }) => {
  return render(
    <CatchContext.Provider value={{ deletePokemon }}>
      {ui}
    </CatchContext.Provider>,
    renderOptions
  );
};

test("Pokemon content card is shown", () => {
  customRender(
    <OwnedPokemonCard item={{ pokemonId: 1, nickname: "monster1" }} />,
    {}
  );
  expect(screen.getByRole("heading")).toHaveTextContent("monster1");
  expect(screen.getByAltText(/pokemon/i)).toHaveAttribute(
    "src",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  );
});
