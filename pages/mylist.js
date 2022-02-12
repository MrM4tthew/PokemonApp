import Layout from "../src/layout";
import { MylistContext } from "../context/MylistContext";
import { useContext } from "react";

const mylist = () => {
  const { myList, setMylist } = useContext(MylistContext);
  console.log("value", myList);
  return <Layout>mylist</Layout>;
};

export default mylist;
