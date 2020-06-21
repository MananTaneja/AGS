import Layout from "../components/Layout";
import axios from "axios";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import { loginUser } from "../redux/actions/authActions";
import Router from "next/router";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: "",
      name: "",
      //error class
      errors: {
        error1:"Just for logging you in session!",
        errorcolor1:"black",
        error2:"For Billing Purposes",
        errorcolor2:"black"
      }
      
      
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
    this.state.errors["errorcolor1"]="black";
    this.state.errors["error2"] = "For Billing Purposes";
    this.state.errors["errorcolor2"]="black";
  }

  //form validation
  handleValidation(){
    let phoneNumber = this.state.phoneNumber;
    let name = this.state.name;
    let errors = this.state.errors;
    let formIsValid = true;

    //validating phonenuber
    if(typeof phoneNumber !== "undefined"){
       if(!phoneNumber.match(/^\d{10}$/)){
          formIsValid = false;
          errors["error1"] = "*Enter a valid phonenumber";
          errors["errorcolor1"]="red";
       }        
    }
    //validating name
   if(typeof name !== "undefined"){
      if(!name.match(/^[a-zA-Z\s-, ]+$/)){
         formIsValid = false;
         errors["error2"] = "*Enter a valid name";
         errors["errorcolor2"]="red";
      }        
   }

   this.setState({errors: errors});

   return formIsValid;
}

  onSubmit = async (event) => {
    event.preventDefault();

    const userData = {
      phoneNumber: this.state.phoneNumber,
      name: this.state.name,
    };
    //validating
    if(this.handleValidation()){
      this.props.loginUser(userData);
    Router.push("/profile", undefined, { shallow: true });
   }
    // this.props.loginUser(userData);
    // Router.push("/profile", undefined, { shallow: true });
    // const res = await fetch("http://localhost:5000/login", {
    //   method: "post",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // });
    // const json = await res.json();
    // console.log(json);
  };
  render() {
    return (
      <Layout>
        <div className="container">
          <div className="card d-flex mt-3 pt-3">
            <img
              src="https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              className="card-img-top border border-dark rounded-circle"
              alt="qsr"
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
                  <span  style={{color: this.state.errors["errorcolor1"]}}>{this.state.errors["error1"]}</span>
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
                  <span  style={{color: this.state.errors["errorcolor2"]}}>{this.state.errors["error2"]}</span>
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
      </Layout>
    );
  }
}

// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
// export default Login;