import PropTypes from "prop-types";
import {Component} from "react";
import {Redirect} from "react-router-dom";
import {create} from "application/requests/session";
import {Alert} from "components/helpers";

export default class Session extends Component {
  static defaultProps = {profile: null}
  static propTypes = {
    profile: PropTypes.shape({
      id: PropTypes.number.isRequired
    }),
    updateProfile: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);

    this.state = {user: {}};
  }
  clearAlert = () => {
    this.setState({alert: null});
  }
  onChange = (e) => {
    const {name, value} = e.target;

    this.setState(({user}) => ({user: {...user, [name]: value}}));
  }
  onSubmit = (e) => {
    e.preventDefault();

    create({user: this.state.user}).then((data) => {
      if(data.success) {
        this.props.updateProfile(data.user);
      } else {
        this.setState({alert: {content: "Invalid credentials", type: "danger"}});
      }
    });
  }
  render() {
    if(this.props.profile) {
      const state = {message: "Logged In", type: "success"};

      return <Redirect to={{pathname: "/admin/profile", state}} />;
    }

    const {alert, user} = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h3 className="text-center">Login</h3>
            {alert && <Alert {...alert} onClose={this.clearAlert} />}
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="session-email">Email</label>
                <input className="form-control" id="session-email" name="email" onChange={this.onChange} placeholder="Email" type="email" value={user.email || ""} />
              </div>
              <div className="form-group">
                <label htmlFor="session-password">Password</label>
                <input className="form-control" id="session-password" name="password" onChange={this.onChange} placeholder="Password" type="password" value={user.password || ""} />
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
