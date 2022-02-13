import { getByTestId, render, screen } from "@testing-library/react";
import OwnedPokemonCard from "../src/components/PersonalList/OwnedPokemonCard";

test("Removing pokemon from mylist page will also remove it on localstorage", () => {
  render(<OwnedPokemonCard item={{ nickname: "monster" }} />);

  // expect(container.getElementsByClassName("owned"));
  // getByText("Owned: 0");
  expect(screen.getByTestId("releasebtn")).toBeEnabled();
});
