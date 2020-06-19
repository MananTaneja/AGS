import Layout from "../components/Layout";
import jwt_decode from "jwt-decode";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      name: "",
    };
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      phoneNumber: decoded.phoneNumber,
      name: decoded.name,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.phoneNumber}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Profile;
