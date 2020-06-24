import Layout from "../components/Layout";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authActions";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.auth.user;
    return (
      <Layout>
        <div className="container">
          <div className="jumbotron mt-5 bg-transparent">
            <div className="col-sm-8 mx-auto">
              <h3 className="text-center">Billing Details</h3>
            </div>
            <table className="table col-md-6 mx-auto mt-4">
              <tbody>
                <tr>
                  <td>Phone Number</td>
                  <td>{user.phoneNumber}</td>
                </tr>
                <tr>
                  <td>Name</td>
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
