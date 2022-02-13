import { useState, createContext, useEffect } from "react";

export const CatchContext = createContext();

export const CatchProvider = (props) => {
  const [status, setStatus] = useState();
  const [pokemon, setPokemon] = useState({});
  const [savedPokemon, setSavedPokemon] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("mylist") == null) {
      localStorage.setItem("mylist", JSON.stringify([]));
    }

    var currentData = JSON.parse(localStorage.getItem("mylist"));
    setData(currentData);
  }, []);

  useEffect(() => {
    localStorage.setItem("mylist", JSON.stringify(data));
  }, [data]);

  const closePokemonRunForm = () => {
    setStatus();
  };

  const catchPokemon = () => {
    Math.random() < 0.5 == true ? setStatus(true) : setStatus(false);
    // setStatus(false);
  };

  const savePokemon = () => {
    setData([...data, savedPokemon]);
  };

  const deletePokemon = (value) => {
    const updateList = data.filter((item) => item.nickname !== value);

    setData(updateList);
  };

  return (
    <CatchContext.Provider
      value={{
        data,
        status,
        setStatus,
        pokemon,
        setPokemon,
        savedPokemon,
        setSavedPokemon,
        catchPokemon,
        savePokemon,
        deletePokemon,
        closePokemonRunForm,
      }}
    >
      {props.children}
    </CatchContext.Provider>
  );
};
