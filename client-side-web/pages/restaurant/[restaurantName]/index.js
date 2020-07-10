import { useRouter } from "next/router";
import { getMenuDetails, getMenu } from "../../../redux/actions/productActions";
import Layout from "../../../components/Layout";
import store from "../../../redux/store";
import Home from "./home";

const Index = (props) => {
  const router = useRouter();

  const restaurant = router.query.restaurantName;
  // React.useEffect(() => {
  //   if (localStorage.menuDetails) {
  //     const menuDetails = localStorage.menuDetails;
  //     store.dispatch(getMenu(menuDetails));
  //   } else {
  //     store.dispatch(getMenuDetails(restaurant));
  //   }
  // });

  // sleep(2000);
  return (
    <Layout>
      <Home restaurant={restaurant} />
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

// Index.getInitialProps = async (ctx) => {
//   console.log(JSON.stringify(ctx.pathname));
// };

export default Index;
