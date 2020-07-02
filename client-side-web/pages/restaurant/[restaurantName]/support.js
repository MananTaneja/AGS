import { connect } from "react-redux";
import Login from "../../../components/login";
import Menu from "../../../components/Menu";
import MiniCart from "../../../components/MiniCart";
import { getMenuDetails } from "../../../redux/actions/productActions";
import store from "../../../redux/store";


class Support extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount (){
    const restaurant = this.props.restaurant;
    store.dispatch(getMenuDetails(restaurant));
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const restaurant = this.props.restaurant;
    //store.dispatch(getMenuDetails(restaurant));
    const authLinks = (
      <div>
        <Menu restaurant={restaurant} />
        <MiniCart />
      </div>
    );
    const notAuthLinks = <Login restaurant={restaurant} />;
    return <div>{isAuthenticated ? authLinks : notAuthLinks}</div>;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Support);
