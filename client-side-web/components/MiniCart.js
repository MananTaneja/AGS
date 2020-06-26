import { connect } from "react-redux";
import { addOrderToCart } from "../redux/actions/cartActions";
import { getMenuDetails } from "../redux/actions/productActions";


class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 22,
    };
  }

  render() {
    const quant = this.props.cart.quantityById;
    var tot=0;

    let menus = JSON.parse(JSON.stringify(this.props.menu));
    const cartItem = this.props.cart.addedIds.map((productId) => (
      menus.map((product)=>{
        
       if(product.id===productId)
      {
        tot=tot+(quant[productId]*product.ItemPrice);

  
      console.log(product.id);
      return(
      <li className="list-group-item d-flex justify-content-between">
        
        <p>{productId}</p>
        <p>{product.MenuItem}</p>
        <p>₹{product.ItemPrice}</p>
         <p>{quant[productId]}</p>
      </li>);
       }
    }
      )
    ));
    const cartTotal = (
      <div className="d-flex justify-content-between list-group-item bg-dark text-white">
        <h5>Total: </h5>
        <h5>₹{tot}</h5>
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
  menu: state.products.menuDetails,
});

export default connect(mapStateToProps, { addOrderToCart, getMenuDetails })(MiniCart);