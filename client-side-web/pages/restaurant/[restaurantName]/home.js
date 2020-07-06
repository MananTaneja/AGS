import { connect } from "react-redux";
import Login from "../../../components/login";
import Menu from "../../../components/Menu";
import MiniCart from "../../../components/MiniCart";
import { getMenuDetails, setMenu } from "../../../redux/actions/productActions";
import store from "../../../redux/store";

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
