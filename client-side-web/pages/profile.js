import Layout from "../components/Layout";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authActions";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      name: "",
    };
  }

  render() {
    const user = this.props.auth.user;
    return (
      <Layout>
        <div className="container">
          <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto">
              <h1 className="text-center">PROFILE</h1>
            </div>
            <table className="table col-md-6 mx-auto">
              <tbody>
                <tr>
                  <td>Phone Number</td>
                  <td>{user.phoneNumber}</td>
                </tr>
                <tr>
                  <td>Last Name</td>
                  <td>{user.name}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Profile);
