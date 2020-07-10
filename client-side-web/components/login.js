import Layout from "./Layout";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../redux/actions/authActions";
import Router from "next/router";
import Head from "next/head";
import classNames from "classnames";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      name: "",
      legal: false,
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
    this.onAgree = this.onAgree.bind(this);
  }

  componentDidUpdate(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // Router.push("/", undefined, { shallow: true });
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

  onAgree = async (event) => {
    event.preventDefault();

    this.setState({
      legal: true,
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      phoneNumber: this.state.phoneNumber,
      name: this.state.name,
    };
    //validating
    const restaurantName = this.props.restaurant;
    if (this.handleValidation()) {
      this.props.loginUser(userData);
      Router.push(
        "/restaurant/[restaurantName]",
        `/restaurant/${restaurantName}`
      );
    }
  };
  render() {
    const restaurantName = this.props.restaurant;
    const legalClass = classNames({
      modal: true,
      "is-active is-clipped": !this.state.legal,
    });
    return (
      <Layout>
        <div>
          <div className={legalClass}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">TnC</p>
              </header>
              <section className="modal-card-body">
                <p>Sample Legal terms and conditions</p>
              </section>
              <footer className="modal-card-foot">
                <button className="button is-success" onClick={this.onAgree}>
                  Agree
                </button>
                <button className="button">Disagree</button>
              </footer>
            </div>
          </div>
          <div className="container">
            <div className="card d-flex mt-3 pt-3 shadow-sm">
              <img
                src={"/logos/" + restaurantName + ".png"}
                className="card-img-top border rounded-circle"
                alt="image"
              />
              <div className="card-body">
                <form onSubmit={this.onSubmit} className="d-flex flex-column">
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
            <footer className="footer">
              <div className="content has-text-centered">
                <p>
                  <strong>Bulma</strong> by{" "}
                  <a href="https://jgthms.com">Jeremy Thomas</a>. The source
                  code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">
                    MIT
                  </a>
                  . The website content is licensed{" "}
                  <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                    CC BY NC SA 4.0
                  </a>
                  .
                </p>
              </div>
            </footer>
            <style jsx>{`
              img {
                height: 10rem;
                width: 10rem;
                margin: auto;
              }
            `}</style>
          </div>
        </div>
      </Layout>
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
