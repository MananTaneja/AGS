import Layout from "../../../components/Layout";
import { connect } from "react-redux";
import { addOrderToCart } from "../../../redux/actions/cartActions";
import { getMenuDetails } from "../../../redux/actions/productActions";
import { loginUser } from "../../../redux/actions/authActions";
import Router from "next/router";
import axios from "axios";
import { firebaseCloudMessaging } from "../../../utils/webPush";
// import * as firebase from 'firebase/app';
// import '@firebase/messaging';

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Token: "",
      orderid: 0,
      //   menuName: " ",
      //   price:"",
      //   quantity:" "
    };
  }
  componentDidMount() {
    //   const messaging = firebase.messaging()
    //   messaging.requestPermission().then(()=>{
    //     return messaging.getToken()
    //   }).then(token=>{
    //     this.state.Token = token
    //     console.log(token)

    // })
    //    .catch((err)=>{
    //     console.log(err);

    //   })
    axios
      .get("https://ags-restaurant.web.app/order/id")
      .then((res) => {
        var order = res.data.orderID + 1;
        console.log(order);
        this.setState({ orderid: this.state.orderid + order });
      })
      .catch((err) => {
        console.log("error");
      });
  }

  makePayment = async () => {
    alert("You will be redirected to payment page now!");

    const token = await firebaseCloudMessaging.init();
    console.log(this.state.orderid);
    localStorage.setItem("TOKEN", token);

    const quant = this.props.cart.quantityById;
    const menus = this.props.menu;
    const user = this.props.user;

    console.log(user);
    console.log(JSON.stringify(menus));
    const itemList = this.props.cart.addedIds.map((productId) =>
      this.props.menu.map((product, key) =>
        product.subCategories.map((subcat) =>
          subcat.items.map((it) => {
            if (it.itemId === productId) {
              const userData = {
                phoneNumber: user.phoneNumber,
                orderid: this.state.orderid,
                name: user.name,
                menuName: it.itemName,
                menuid: it.itemId,
                token: token,
                price: it.itemPrice,
                quantity: quant[productId],
              };
              console.log(userData);
              axios
                .post(`https://ags-restaurant.web.app/order`, userData)
                .then((res) => {
                  console.log("INSTERED");
                })
                .catch((err) => {
                  console.log("error");
                });
            }
          })
        )
      )
    );
    const data = {
      token:
        "dY0sVc04Rs2zbBx3-x5RLq:APA91bGnXuc9FJG9e4Bg3M5hJaCF-7sjl-zzVJMvVotJN-lEAt9wbkE3fw8p90dpz-gkTr0Di8gGgXlNT22Ri9CsK-h6w74kCnQyUimx6-aNHrDF9r_eZ6b7X9vYP9Qr3cY0DX1XvzVw",
      title: " New Order ",
      body: "test",
    };

    axios
      .post("https://ags-restaurant.web.app/api/send", data)
      .then((res) => {
        console.log("result");
      })
      .catch((err) => {
        console.log("error");
      });

    Router.push("/final");
  };

  render() {
    const quant = this.props.cart.quantityById;
    var tot = 0;

    const menus = this.props.menu;
    const cartItem = this.props.cart.addedIds.map((productId, key) =>
      menus.map((product, key) =>
        product.subCategories.map((subcat) =>
          subcat.items.map((it) => {
            if (it.itemId == productId) {
              tot = tot + quant[productId] * it.itemPrice;
              return (
                <tr key={productId}>
                  <th scope="row">{it.itemName}</th>
                  <td>{quant[productId]}</td>
                  <td>₹{it.itemPrice}</td>
                </tr>
              );
            }
          })
        )
      )
    );
    const cartTotal = (
      <div className="d-flex justify-content-between">
        <h5>Total: </h5>
        <h5>₹ {tot}</h5>
      </div>
    );
    return (
      <Layout>
        {/* {console.log(JSON.stringify(items))} */}
        <div className="container">
          <div className="jumbotron mt-5 mb-0 bg-white">
            <div className="col-sm-8 mx-auto">
              <h3 className="text-center mb-3">Cart</h3>
            </div>
            <table className="table col-md-6 mx-auto text-center">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>{cartItem}</tbody>
            </table>
          </div>
          {cartTotal}
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-danger mx-auto"
              onClick={this.makePayment.bind(this)}
            >
              Make Payment
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  menu: state.products.menuDetails,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  addOrderToCart,
  getMenuDetails,
  loginUser,
})(Payment);
