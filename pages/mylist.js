import Layout from "../src/layout";
import { useContext } from "react";
import { CatchContext } from "../context/CatchContext";
import PersonalList from "../src/components/PersonalList";

const Mylist = () => {
  const { data } = useContext(CatchContext);
  return (
    <Layout>
      <PersonalList data={data} />
    </Layout>
  );
};

export default Mylist;
