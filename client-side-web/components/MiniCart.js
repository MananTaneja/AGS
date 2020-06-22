class MiniCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 22,
    };
  }

  render() {
    const cartItem = (
      <li className="list-group-item d-flex justify-content-between">
        <p>Cart Item</p>
        <p>₹22</p>
      </li>
    );
    const cartTotal = (
      <div className="d-flex justify-content-between list-group-item bg-dark text-white">
        <h5>Total: </h5>
        <h5>₹{this.state.total}</h5>
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

export default MiniCart;
