import { connect } from "react-redux";
import { addOrderToCart } from "../redux/actions/cartActions";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  addToCart = async (product) => {
    // const addition = this.state.order;
    // addition.push(product);
    // this.setState({
    //   order: addition,
    // });
    this.props.addOrderToCart(product.id);
    // console.log(JSON.stringify(this.state.order));
  };

  render() {
    const menuItems = this.props.menu.map((product, key) => (
      <li key={product.id}>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
                className="card-img"
                alt="menu prod"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body bg-light text-center">
                <h5 className="card-title">{product.MenuItem}</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Sample Dietary Restrictions
                  </small>
                </p>
                <p className="card-text ">₹{product.ItemPrice}</p>
                <p className="card-text">{product.Category}</p>
                <button
                  onClick={this.addToCart.bind(this, product)}
                  className="btn btn-danger"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    ));
    return (
      <div>
        <div className="container mt-3 mb-3" id="header">
          <h3 className="text-center text-warning">McDonald's Menu</h3>
        </div>
        {JSON.stringify(this.props.test.addedByIds)}
        <ul className="card-group d-flex flex-column ">{menuItems}</ul>
        {/* Have added these below break lines as cart is fixed at bottom */}
        <br />
        <br />
        <br />
        <br />
        <style jsx>{`
          ul {
            list-style: none;
            padding-left: 20px;
            padding-right: 20px;
          }
          .card {
            max-width: 20px;
          }
          .card-img,
          .card-img-bottom,
          .card-img-top {
            width: 30vw;
          }
          .row {
            flex-direction: row;
          }
        `}</style>
      </div>
    );
  }
}

// export default Menu;

// Redux commands

const mapStateToProps = (state) => ({
  test: state.cart,
});

export default connect(mapStateToProps, { addOrderToCart })(Menu);
