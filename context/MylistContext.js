import { useState, createContext } from "react";

export const MylistContext = createContext();

export const MylistProvider = (props) => {
  const [mylist, setMylist] = useState([
    {
      nickname: "Johny",
      name: "venusaur",
      type: "grass",
    },
    {
      nickname: "Jade",
      name: "gengar",
      type: "ghost",
    },
    {
      nickname: "Little",
      name: "raichu",
      type: "electric",
    },
  ]);

  return (
    <MylistContext.Provider value={{ mylist, setMylist }}>
      {props.children}
    </MylistContext.Provider>
  );
};
