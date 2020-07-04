import { connect } from "react-redux";
import { addOrderToCart } from "../redux/actions/cartActions";
import { getMenuDetails } from "../redux/actions/productActions";
import axios from "axios";
import classnames from "classnames";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      isfound: false,
      data: props.menu.map(el => null)
    };
  }

  addToCart = async (product) => {
    this.props.addOrderToCart(product.menuID);
  };
  getimg = async (data,i) =>{ 
    await new Promise((resolve, reject) => {
    console.log("print "+data);
    axios
    .get(`http://localhost:5000/s3image/${data}`)
    .then((res) => {
      //console.log(i)
      //console.log(res)
      //let image="<img src='data:image/jpeg;base64," + res.data.data + "'" + "/>";
      //console.log(image)
      const ldata = this.state.data;
      ldata[i] = <img
      src={`data:image/jpeg;base64,${res.data.data}`}
      className="card-img"
      alt="menu prod"
    />;
      if(i == this.props.menu.length - 1) {
      this.setState({ data: ldata, isfound: true })
      }
      else {
      this.setState({data: ldata })
      }
      
    })
    .catch((err) =>{
      console.log(err);
    }
    );
  })
  }

 componentDidMount()
 {
  for(let i=0;i<this.props.menu.length;i++)
  {
    let product=this.props.menu[i]
    this.getimg(`${product.restID}_${product.menuItem}`,i)
  } 
   
 }

  render() {
    const restaurantName = this.props.restaurant;
    const menuItems = this.props.menu.map((product, key) => (
      <li key={product.menuID}>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
            {this.state.isfound ? this.state.data[key] : "Loading"}
              {/* <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
                className="card-img"
                alt="menu prod"
              /> */}
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
