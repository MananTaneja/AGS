// import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

import Menu from "../components/Menu";
import MiniCart from "../components/MiniCart";

const Index = (props) => (
  <Layout>
    <div>
      <Menu />
      {console.log(props.url)}
      <MiniCart />
      <style jsx>{``}</style>
    </div>
  </Layout>
);

Index.getInitialProps = async (context) => {
  return {
    url: context,
  };
};
export default Index;
