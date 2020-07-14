import { connect } from "react-redux";
import Login from "../../../components/login";
import Menu from "../../../components/Menu";
import MiniCart from "../../../components/MiniCart";
import { getMenuDetails, setMenu } from "../../../redux/actions/productActions";
import store from "../../../redux/store";
import { setOrderCart } from "../../../redux/actions/cartActions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantName: "",
    };
  }

  componentDidMount() {
    const restaurantName = this.props.restaurant;
    this.setState({
      restaurantName: restaurantName,
    });
    if (localStorage.menuDetails) {
      const menuDetails = JSON.parse(localStorage.getItem("menuDetails") || []);
      store.dispatch(setMenu(menuDetails));
    } else {
      store.dispatch(getMenuDetails(restaurantName));
    }
    if (localStorage.addedIds && localStorage.quantIds) {
      const quantityById = JSON.parse(localStorage.getItem("quantIds") || []);
      const addedIds = localStorage.addedIds.split(",");
      console.log(addedIds);
      console.log(quantityById);
      store.dispatch(setOrderCart(addedIds, quantityById));
      // cartItems.map((item) => {
      //   let quant = cartQuant[item];
      //   for (let i = 0; i < quant; i++) {
      //     console.log(item);
      //     this.props.addOrderToCart(item);
      //   }
      // });
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <div>
        <Menu restaurant={this.state.restaurantName} />
        <MiniCart restaurant={this.state.restaurantName} />
      </div>
    );
    const notAuthLinks = <Login restaurant={this.state.restaurantName} />;
    return <div>{isAuthenticated ? authLinks : notAuthLinks}</div>;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Home);
