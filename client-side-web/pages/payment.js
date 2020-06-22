import Layout from "../components/Layout";
import { connect } from "react-redux";
import { addOrderToCart } from "../redux/actions/cartActions";

class Payment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.cart.addedIds;
    const quant = this.props.cart.quantityById;
    return (
      <Layout>
        <div className="container">
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h3 className="text-center mb-3">Make Payment</h3>
            </div>
            <table className="table col-md-6 mx-auto">
              <tbody>
                <tr>
                  <td>Items</td>
                  <td>{JSON.stringify(items)}</td>
                </tr>
                <tr>
                  <td>Quantity</td>
                  <td>{JSON.stringify(quant)}</td>
                </tr>
              </tbody>
            </table>
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
