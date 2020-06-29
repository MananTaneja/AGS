import { useRouter } from "next/router";
import { getMenuDetails } from "../../../redux/actions/productActions";
import Menu from "../../../components/Menu";
import Layout from "../../../components/Layout";
import Login from "../../../components/login";
import store from "../../../redux/store";

const Index = () => {
  const router = useRouter();
  const { restaurantName } = router.query;
  store.dispatch(getMenuDetails(restaurantName));
  return (
    <Layout>
      <Menu restaurant={restaurantName} />

      {console.log(restaurantName)}
    </Layout>
  );
};

export default Index;
