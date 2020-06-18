import Layout from "../components/Layout";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      phoneNumber: "",
      name: "",
    };
    this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // onSubmit(event) {
  //   event.preventDefault();

  //   const newUser = {
  //     phoneNumber: this.state.phoneNumber,
  //     name: this.state.name,
  //   };

  //   axios
  //     .post("http://localhost:5000/login", newUser)
  //     .then((res) => {
  //       console.log(res);
  //       this.setState({
  //         name: "",
  //         phoneNumber: "",
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

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
                action="http://localhost:5000/login"
                method="POST"
                className="d-flex flex-column"
              >
                <div className="form-group">
                  <label for="phoneNumber">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Phone Number"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.onChange}
                    required
                  />
                  <small className="form-text text-muted">
                    Just for logging you in session!
                  </small>
                </div>
                <div className="form-group">
                  <label for="phoneNumber">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                  />
                  <small className="form-text text-muted">
                    For Billing Purposes
                  </small>
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

export default Login;
