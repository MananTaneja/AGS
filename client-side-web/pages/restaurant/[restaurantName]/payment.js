import Layout from "../../../components/Layout";
import { connect } from "react-redux";
import { addOrderToCart } from "../../../redux/actions/cartActions";
import { getMenuDetails } from "../../../redux/actions/productActions";

class Payment extends React.Component {
  constructor(props) {
    super(props);
  }

  makePayment = async () => {
    alert("You will be redirected to payment page now!");
  };

  render() {
    const quant = this.props.cart.quantityById;
    var tot = 0;

    const menus = this.props.menu;
    console.log(JSON.stringify(menus));
    const itemList = this.props.cart.addedIds.map((productId) =>
      menus.map((product) => {
        if (product.menuID === productId) {
          tot = tot + quant[productId] * product.itemPrice;
          return (
            <tr key={productId}>
              <th scope="row">{product.menuItem}</th>
              <td>{quant[productId]}</td>
              <td>₹{product.itemPrice}</td>
            </tr>
          );
        }
      })
    );
    const cartTotal = (
      <div className="d-flex justify-content-between">
        <h5>Total: </h5>
        <h5>₹ {tot}</h5>
      </div>
    );
    return (
      <Layout>
        {/* {console.log(JSON.stringify(items))} */}
        <div className="container">
          <div className="jumbotron mt-5 mb-0 bg-white">
            <div className="col-sm-8 mx-auto">
              <h3 className="text-center mb-3">Cart</h3>
            </div>
            <table className="table col-md-6 mx-auto text-center">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>{itemList}</tbody>
            </table>
          </div>
          {cartTotal}
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-danger mx-auto"
              onClick={this.makePayment.bind(this)}
            >
              Make Payment
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  menu: state.products.menuDetails,
});

export default connect(mapStateToProps, { addOrderToCart, getMenuDetails })(
  Payment
);
