import Layout from "../components/Layout";
import { connect } from "react-redux";
import { addOrderToCart } from "../redux/actions/cartActions";

class Payment extends React.Component {
  constructor(props) {
    super(props);
  }

  makePayment() {
    alert("You will be forwarded to the payment gateway!");
  }

  render() {
    const quant = this.props.cart.quantityById;
    const itemList = this.props.cart.addedIds.map((productId) => (
      <tr>
        <th scope="row">id: {productId}</th>
        <td>{quant[productId]}</td>
        <td>₹ 00.00</td>
      </tr>
    ));
    const cartTotal = (
      <div className="d-flex justify-content-between">
        <h5>Total: </h5>
        <h5>₹ 0.00</h5>
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
                  <th scope="col">Item</th>
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
});

export default connect(mapStateToProps, { addOrderToCart })(Payment);
