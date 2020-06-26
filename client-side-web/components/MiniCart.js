import { connect } from "react-redux";
import { addOrderToCart } from "../redux/actions/cartActions";

class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 22,
    };
  }

  render() {
    const quant = this.props.cart.quantityById;
    const cartItem = this.props.cart.addedIds.map((productId) => (
      <li className="list-group-item d-flex justify-content-between">
        <p>{productId}</p>
        <p>{quant[productId]}</p>
      </li>
    ));
    const cartTotal = (
      <div className="d-flex justify-content-between list-group-item bg-dark text-white">
        <h5>Total: </h5>
        <h5>₹{this.state.total}</h5>
      </div>
    );
    return (
      <div className="fixed-bottom">
        <ul className="list-group">
          {cartItem}
          {cartTotal}
        </ul>
        <style jsx>{``}</style>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { addOrderToCart })(MiniCart);