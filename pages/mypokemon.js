import Layout from "../src/layout";
import { useContext, useEffect, useState } from "react";
import { CatchContext } from "../context/CatchContext";
import PersonalList from "../src/components/PersonalList";
import PokemonSearch from "../src/components/PokemonSearch";

const Mypokemon = () => {
  const { data } = useContext(CatchContext);

  const [search, setSearch] = useState([]);

  useEffect(() => {
    setSearch(data);
  }, [data]);

  // Search function
  const handleInputChange = (e) => {
    var value = e.target.value;
    var valueStr = value.toString().toLowerCase();
    var result = data.filter((x) =>
      x.nickname.toLowerCase().includes(valueStr)
    );
    setSearch(result);
  };

  return (
    <Layout>
      <PokemonSearch
        data={search}
        handleInputChange={handleInputChange}
        mypokemon={true}
      />
      <PersonalList data={search} />
    </Layout>
  );
};

export default Mypokemon;
