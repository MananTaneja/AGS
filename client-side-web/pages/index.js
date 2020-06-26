// import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

import Menu from "../components/Menu";
import MiniCart from "../components/MiniCart";

const Index = (props) => (
  <Layout>
    <div>
      {/* <Menu menu={props.json} /> */}
      <Menu />
      <MiniCart />
      <style jsx>{``}</style>
    </div>
  </Layout>
);

// export const getStaticProps = async (context) => {
//   const res = await fetch(`http://localhost:5000/mcdonalds/menudetails`);
//   const json = await res.json();
//   return {
//     props: {
//       json,
//     },
//   };
// };

export default Index;
