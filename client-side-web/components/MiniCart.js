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
    let tot = 0;
    let quant;

    const menus = this.props.menu;
    if (localStorage.addedIds && this.props.cart.addedIds.length === 0) {
    } else {
      const addedIds = this.props.cart.addedIds;
      localStorage.setItem("addedIds", addedIds);
    }
    if (
      localStorage.quant &&
      Object.keys(this.props.cart.quantityById).length === 0
    ) {
    } else {
      quant = this.props.cart.quantityById;
      localStorage.setItem("quantIds", JSON.stringify(quant));
    }
    const cartItem = this.props.cart.addedIds.map((productId, key) =>
      menus.map((product, key) =>
        product.subCategories.map((subcat) =>
          subcat.items.map((it) => {
            if (it.itemId === productId) {
              tot = tot + quant[productId] * it.itemPrice;

              return (
                <li
                  className="list-group-item d-flex justify-content-between p-0 m-0"
                  key={productId}
                >
                  <p>{it.itemName}</p>
                  <p>₹{it.itemPrice}</p>
                  <span className="badge badge-primary badge-pill h-25">
                    {quant[productId]}
                  </span>
                </li>
              );
            }
          })
        )
      )
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
