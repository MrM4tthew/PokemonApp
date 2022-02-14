import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import PokemonForm from "../src/components/PokemonForm";
import { CatchContext } from "../context/CatchContext";

const customRender = (
  ui,
  { data, pokemon, setSavedPokemon, savePokemon, setStatus, ...renderOptions }
) => {
  return render(
    <CatchContext.Provider value={{ data, pokemon }}>
      {ui}
    </CatchContext.Provider>,
    renderOptions
  );
};

test("Form flow test", () => {
  const data = [
    {
      name: "monster1",
      nickname: "monster bob",
    },
  ];

  const pokemon = {
    id: 1,
  };

  const setSavedPokemon = {};
  const savePokemon = {};
  const setStatus = {};

  customRender(<PokemonForm />, {
    data,
    pokemon,
    setSavedPokemon,
    savePokemon,
    setStatus,
  });

  userEvent.type(screen.getByPlaceholderText(/nickname/i), "monster test");

  expect(screen.getByRole("button", { name: /catch/i })).toBeEnabled();
});
