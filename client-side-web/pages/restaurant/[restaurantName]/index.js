import { useRouter } from "next/router";
import { getMenuDetails } from "../../../redux/actions/productActions";
import Layout from "../../../components/Layout";
import store from "../../../redux/store";
import Support from "./support";

const Index = (props) => {
  const router = useRouter();
  const restaurant = router.query.restaurantName;
  store.dispatch(getMenuDetails(restaurant));
  // sleep(2000);
  return (
    <Layout>
      <Support restaurant={restaurant} />
      {console.log(restaurant)}
    </Layout>
  );
};

function sleep(milliseconds) {
  let timeStart = new Date().getTime();
  while (true) {
    console.log("Waiting...");
    let elapsedTime = new Date().getTime() - timeStart;
    if (elapsedTime > milliseconds) {
      break;
    }
  }
}

export default Index;
