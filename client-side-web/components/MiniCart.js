import { connect } from "react-redux";
import { addOrderToCart } from "../redux/actions/cartActions";
import { getMenuDetails } from "../redux/actions/productActions";
import Router from "next/router";

class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 22,
    };
  }

  proceedToPayment = async () => {
    const restaurantName = this.props.restaurant;
    Router.push(
      "/restaurant/[restaurantName]/payment",
      `/restaurant/${restaurantName}/payment`
    );
  };

  render() {
    const quant = this.props.cart.quantityById;
    let tot = 0;

    const menus = this.props.menu;
    const cartItem = this.props.cart.addedIds.map((productId, key) =>
      menus.map((product) => {
        if (product.menuID === productId) {
          tot = tot + quant[productId] * product.itemPrice;

          return (
            <li
              className="list-group-item d-flex justify-content-between p-0 m-0"
              key={productId}
            >
              <p>{product.menuItem}</p>
              <p>₹{product.itemPrice}</p>
              <span className="badge badge-primary badge-pill h-25">
                {quant[productId]}
              </span>
            </li>
          );
        }
      })
    );
    const cartTotal = (
      <div className="d-flex justify-content-end list-group-item bg-dark text-white">
        <button
          type="button"
          className="btn btn-success"
          onClick={this.proceedToPayment.bind(this)}
        >
          ₹ {tot}
        </button>
      </div>
    );
    return (
      <div className="fixed-bottom p-0 m-0">
        <ul className="list-group list-group-flush">
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
  menu: state.products.menuDetails,
});

export default connect(mapStateToProps, { addOrderToCart, getMenuDetails })(
  MiniCart
);
