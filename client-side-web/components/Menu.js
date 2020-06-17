class Menu extends React.Component {
  state = {};

  render() {
    const menuItems = this.props.menu.map((product, key) => (
      <li key={product.id}></li>
    ));
    return (
      <div>
        <ul>{menuItems}</ul>
      </div>
    );
  }
}

export default Menu;
