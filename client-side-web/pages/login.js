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
        <div className="login">
          <form action="http://localhost:5000/login" method="POST">
            <h1>WELCOME TO MCD</h1>
            <div className="details">
              <p>Phone Number</p>
              <input
                type="text"
                placeholder="Enter Phonenumber"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.onChange}
                required
              />
              <br />
              <p>Name</p>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                required
              />
              <br />
              <br></br>
              <button className="btn" type="submit" value="Submit" />
              <br></br>
              <br></br>
            </div>
          </form>
          <style jsx>{`
          input[type=text]{
              padding: 12px 8px;
              margin: 8px 0;
              display: inline-block;
              width: 75%;
              border: 1.7px solid black;
              background-color: #FFFFF0;
              color: black;
              box-sizing: border-box;
              transition: width 0.4s ease-in-out;
              
            }
            input[type=text]:focus {
              width: 85%
            }
            input[type=submit] {
              width: 75%;
              padding: 10px 15px;
              border: 2px ;
              border-radius: 35px; 
              background-color: #4CAF50;
              color: white;
              box-sizing: border-box;
            }
          h1 {
            text-align: center;
            font
            margin-bottom: 2rem;
             }
          .login{
              justify-content: center;
              flex-direction: row;
              text-align: left;
              margin: 50px 50px 40px;
               }
          form {
              text-align:center;
              border: 10px solid #FFD403;
            }
        `}</style>
        </div>
      </Layout>
    );
  }
}

export default Login;
