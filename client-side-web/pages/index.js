// import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";

import Menu from "../components/Menu";
import MiniCart from "../components/MiniCart";

const Index = () => (
  <Layout>
    <div className="bg-dark full-page text-white d-flex justify-content-center pt-5">
      <div className="jumbotron m-3 p-3 text-monospace bg-secondary">
        <h3 className="display-4">Hello, Hacker!</h3>
        <p className="lead">
          You can't get away with changing URLs manually
          <br />
          Sorry!
          <br />
          <br />
          <div className="container bg-info rounded-pill p-2 text-center">
            Please Re-Scan the QR Code Provided
          </div>
        </p>
      </div>
      <style jsx>{`
        .full-page {
          height: 100vh;
        }
        .jumbotron {
          height: 50vh;
        }
      `}</style>
    </div>
  </Layout>
);

export default Index;
