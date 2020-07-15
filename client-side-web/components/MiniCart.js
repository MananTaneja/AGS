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
    let quant = {};
    let addedIds = [];
    const menus = this.props.menu;
    if (localStorage.addedIds && this.props.cart.addedIds.length === 0) {
      // addedIds = localStorage.getItem("addedIds");
    } else {
      addedIds = this.props.cart.addedIds;
      console.log("ADDEDIDS: " + JSON.stringify(addedIds));
      localStorage.setItem("addedIds", addedIds);
    }
    if (
      localStorage.quant &&
      Object.keys(this.props.cart.quantityById).length === 0
    ) {
      quant = JSON.parse(localStorage.getItem("quant") || []);
    } else {
      console.log("MiniCart Quant!");
      quant = this.props.cart.quantityById;
      console.log(quant);
      localStorage.setItem("quantIds", JSON.stringify(quant));
    }
    const cartItem = addedIds.map((productId, key) => {
      // console.log("ProductID: UPPER" + JSON.stringify(productId));
      menus.map((product, key) =>
        product.subCategories.map((subcat) =>
          subcat.items.map((it) => {
            console.log("ProductID: " + productId);
            console.log("ItemId: " + it.itemId);
            if (it.itemId == productId) {
              tot = tot + quant[productId] * it.itemPrice;
              console.log(
                "IF-BLOCK: Inside cart Items: " + JSON.stringify(productId)
              );
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
            } else {
              // console.log("Inside cart Items: " + JSON.stringify(it.itemId));
            }
          })
        )
      );
    });

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
