class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
    };
    //this.addToCart = this.addToCart().bind(this);
  }

  addToCart = () => {
    this.setState((prevState) => {
      this.setState({
        order: prevState.order.push("prod"),
      });
    });
  };

  render() {
    const menuItems = this.props.menu.map((product, key) => (
      <li key="product.id">
        <div class="card mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
                class="card-img"
                alt="menu prod"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body bg-light text-center">
                <h5 class="card-title">{product.MenuItem}</h5>
                <p class="card-text">Sample Description of the product</p>
                <p class="card-text">
                  <small class="text-muted">Sample Dietary Restrictions</small>
                </p>
                <p className="card-text ">Rs {product.ItemPrice}</p>
                <p className="card-text">{product.Category}</p>
                <button onClick={this.addToCart} className="btn btn-danger">
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
        <ul className="card-group d-flex flex-column">{menuItems}</ul>
        <p>{console.log(this.state.order)}</p>
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

export default Menu;
