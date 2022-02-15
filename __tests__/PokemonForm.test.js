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
    <CatchContext.Provider value={{ data, setSavedPokemon, pokemon }}>
      {ui}
    </CatchContext.Provider>,
    renderOptions
  );
};

test("Button will be enabled if the text input is not empty", () => {
  const data = [
    {
      name: "monster1",
      nickname: "monster bob",
    },
  ];
  const pokemon = jest.mock();

  const setSavedPokemon = jest.fn();
  const savePokemon = jest.fn();
  const setStatus = jest.fn();

  customRender(<PokemonForm />, {
    data,
    pokemon,
    setSavedPokemon,
    savePokemon,
    setStatus,
  });

  userEvent.type(screen.getByPlaceholderText(/nickname/i), "monster bob");

  expect(screen.getByRole("button", { name: /catch/i })).toBeEnabled();
});

test("Button will be disabled if the text input is empty", () => {
  const data = [
    {
      name: "monster1",
      nickname: "monster bob",
    },
  ];
  const pokemon = jest.mock();

  const setSavedPokemon = jest.fn();
  const savePokemon = jest.fn();
  const setStatus = jest.fn();

  customRender(<PokemonForm />, {
    data,
    pokemon,
    setSavedPokemon,
    savePokemon,
    setStatus,
  });

  userEvent.type(screen.getByPlaceholderText(/nickname/i), "");

  expect(screen.getByRole("button", { name: /catch/i })).toBeDisabled();
});

test("Button will be disabled if the text input has the same nickname as the on the local strorage", () => {
  const data = [
    {
      name: "monster1",
      nickname: "monster",
    },
  ];
  const pokemon = {
    name: "monster1",
  };

  const setSavedPokemon = jest.fn();
  const savePokemon = jest.fn();
  const setStatus = jest.fn();

  customRender(<PokemonForm />, {
    data,
    pokemon,
    setSavedPokemon,
    savePokemon,
    setStatus,
  });

  userEvent.type(screen.getByPlaceholderText(/nickname/i), "monster");

  expect(screen.getByRole("button", { name: /catch/i })).toBeDisabled();
  expect(screen.getByTestId("error-message")).toHaveTextContent(
    "nickname is taken"
  );
});
test("Button will be enabled if the text input has the same nickname as the on the local strorage", () => {
  const data = [
    {
      name: "monster1",
      nickname: "monster",
    },
  ];
  const pokemon = {
    name: "monster1",
  };

  const setSavedPokemon = jest.fn();
  const savePokemon = jest.fn();
  const setStatus = jest.fn();

  customRender(<PokemonForm />, {
    data,
    pokemon,
    setSavedPokemon,
    savePokemon,
    setStatus,
  });

  userEvent.type(screen.getByPlaceholderText(/nickname/i), "binatang");

  expect(screen.getByRole("button", { name: /catch/i })).toBeEnabled();
});
