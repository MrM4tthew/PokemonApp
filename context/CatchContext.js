import { useState, createContext } from "react";

export const CatchContext = createContext();

export const CatchProvider = (props) => {
  const [status, setStatus] = useState(false);

  const catchPokemon = async () => {
    Math.random() < 0.5 == true ? setStatus(true) : setStatus(false);
  };

  //   function catchPokemon() {
  //     if (Math.random() < 0.5 == true) {
  //       setStatus(true);
  //     } else {
  //       setStatus(false);
  //     }
  //   }

  return (
    <CatchContext.Provider value={{ status, catchPokemon }}>
      {props.children}
    </CatchContext.Provider>
  );
};
