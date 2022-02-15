import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonSearch from "../src/components/PokemonSearch";

test("Search will be disabled if data is empty", () => {
  render(<PokemonSearch data={""} />);

  expect(screen.getByRole("textbox")).toBeDisabled;
});
test("Search will be enabled if data is empty", () => {
  render(<PokemonSearch data={{ name: "name1" }} />);

  expect(screen.getByRole("textbox")).toBeDisabled;
});
