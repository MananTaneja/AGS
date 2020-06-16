import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

// import DisplayMenu from "../components/DisplayMenu";

const Index = (props) => (
  <Layout>
    <div>
      <h1> Welcome to Contactless Ordering System</h1>
      {/* <DisplayMenu menu={props.menu} /> */}
    </div>
  </Layout>
);

// Index.getInitialProps = async (context) => {
//   // const res = await fetch("http://localhost:5000/mcdonalds/menudetails");
//   // const json = await res.json();
//   // return {
//   //   menu: json,
//   // };
// };

export default Index;
