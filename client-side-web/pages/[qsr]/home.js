import Layout from "../../components/Layout";
import { useRouter, Router } from "next/router";

function Home() {
  const route = useRouter();

  return (
    <Layout>
      <div className="container">
        <h3>Home Page</h3>
        <p>Route being used: {route.query.qsr}/home</p>
      </div>
    </Layout>
  );
}

export default Home;
