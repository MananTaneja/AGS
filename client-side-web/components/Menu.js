import { connect } from "react-redux";
import { addOrderToCart } from "../redux/actions/cartActions";
import { getMenuDetails } from "../redux/actions/productActions";
import classnames from "classnames";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  addToCart = async (product) => {
    this.props.addOrderToCart(product.menuID);
  };

  render() {
    const restaurantName = this.props.restaurant;
    const menuItems = this.props.menu.map((product, key) => (
      <li key={product.menuID}>
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
                <h5 className="card-title">{product.menuItem}</h5>
                <p className="card-text">
                  <small className="text-muted">
                    Sample Dietary Restrictions
                  </small>
                </p>
                <p className="card-text ">₹ {product.itemPrice}.00</p>
                <p className="card-text text-muted">{product.category}</p>
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
          <h3 className="text-center text-warning">{restaurantName} Menu</h3>
        </div>
        {/* {JSON.stringify(this.props.test.addedByIds)} */}
        <ul className="card-group d-flex flex-column ">{menuItems}</ul>
        {/* Have added these below break lines as cart is fixed at bottom */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
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
  menu: state.products.menuDetails,
});

export default connect(mapStateToProps, { addOrderToCart, getMenuDetails })(
  Menu
);
