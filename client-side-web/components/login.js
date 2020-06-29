import Layout from "./Layout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../redux/actions/authActions";
import Router from "next/router";
import Head from "next/head";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      name: "",
      //error class
      errors: {
        error1: "Just for logging you in session!",
        errorcolor1: "black",
        error2: "For Billing Purposes",
        errorcolor2: "black",
      },
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      Router.push("/", undefined, { shallow: true });
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    //setting default span
    this.state.errors["error1"] = "Just for logging you in session!";
    this.state.errors["errorcolor1"] = "black";
    this.state.errors["error2"] = "For Billing Purposes";
    this.state.errors["errorcolor2"] = "black";
  }

  //form validation
  handleValidation() {
    let phoneNumber = this.state.phoneNumber;
    let name = this.state.name;
    let errors = this.state.errors;
    let formIsValid = true;

    //validating phonenuber
    if (typeof phoneNumber !== "undefined") {
      if (!phoneNumber.match(/^\d{10}$/)) {
        formIsValid = false;
        errors["error1"] = "*Enter a valid phonenumber";
        errors["errorcolor1"] = "red";
      }
    }
    //validating name
    if (typeof name !== "undefined") {
      if (!name.match(/^[a-zA-Z\s-, ]+$/)) {
        formIsValid = false;
        errors["error2"] = "*Enter a valid name";
        errors["errorcolor2"] = "red";
      }
    }

    this.setState({ errors: errors });

    return formIsValid;
  }

  onSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      phoneNumber: this.state.phoneNumber,
      name: this.state.name,
    };
    //validating
    if (this.handleValidation()) {
      this.props.loginUser(userData);
      Router.push("/profile", undefined, { shallow: true });
    }
  };
  render() {
    const restaurantName = this.props.restaurant;
    return (
      <div>
        <Head>
          <title>Login</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          />
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
            integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <div className="container">
          <div className="card d-flex mt-3 pt-3 shadow-sm">
            <img
              src={"/logos/" + restaurantName + ".png"}
              className="card-img-top border rounded-circle"
              alt="image"
            />
            <div className="card-body">
              <form
                // action="http://localhost:5000/login"
                // method="POST"
                onSubmit={this.onSubmit}
                className="d-flex flex-column"
              >
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.onChange}
                    required
                  />
                  <small>
                    <span style={{ color: this.state.errors["errorcolor1"] }}>
                      {this.state.errors["error1"]}
                    </span>
                  </small>
                  {/* <small className="form-text text-muted">
                    Just for logging you in session!
                  </small> */}
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                  />
                  <small>
                    <span style={{ color: this.state.errors["errorcolor2"] }}>
                      {this.state.errors["error2"]}
                    </span>
                  </small>
                  {/* <small className="form-text text-muted">
                    For Billing Purposes
                  </small> */}
                </div>
                <button className="btn btn-dark" type="submit" value="Submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          <style jsx>{`
            img {
              height: 10rem;
              width: 10rem;
              margin: auto;
            }
          `}</style>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
