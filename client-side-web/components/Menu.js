class Menu extends React.Component {
  state = {};

  render() {
    const menuItems = this.props.menu.map((product, key) => (
      <li key={product.id}>
        <h3>{product.MenuItem}</h3>
        <h4>Rs. {product.ItemPrice}</h4>
        <p>{product.Category}</p>
      </li>
    ));
    return (
      <div>
        <ul>{menuItems}</ul>
        <style jsx>{`
          ul {
            list-style: none;
          }
        `}</style>
      </div>
    );
  }
}

export default Menu;
