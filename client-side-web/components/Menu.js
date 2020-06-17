class Menu extends React.Component {
  state = {};

  render() {
    const menuItems = this.props.menu.map((product, key) => (
      <li className="card">
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80"
          alt="Card image cap"
          width="10"
        />
        <div className="card-body">
          <h5 className="card-title">{product.MenuItem}</h5>
          <p className="card-text">{product.ItemPrice}</p>
          <p className="card-text">{product.Category}</p>
          <a href="#" className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </li>
    ));
    return (
      <div>
        <ul className="card-group">{menuItems}</ul>
        <style jsx>{`
          ul {
            list-style: none;
          }
          card {
            width: 18rem;
          }

          .card-img-top {
            width: 20vw;
          }
        `}</style>
      </div>
    );
  }
}

export default Menu;
