import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

import Menu from "../components/Menu";

const Index = (props) => (
  <Layout>
    <div>
      <h2>Menu</h2>
      <Menu menu={props.menu} />
      <style jsx>{`
        h2 {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  </Layout>
);

Index.getInitialProps = async (context) => {
  const res = await fetch("http://localhost:5000/mcdonalds/menudetails");
  const json = await res.json();
  return {
    menu: json,
  };
};

export default Index;
