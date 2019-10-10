import PropTypes from "prop-types";
import {Component} from "react";
import {update} from "application/requests/profile";
import {Alert} from "components/helpers";

export default class Profile extends Component {
  static defaultProps = {profile: null}
  static propTypes = {
    profile: PropTypes.shape({
      email: PropTypes.string.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired
    }),
    updateProfile: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);

    this.state = {changes: {}};
  }
  clearAlert = () => {
    this.setState({alert: null});
  }
  onChange = (e) => {
    const {name, value} = e.target;

    this.setState((prevState) => {
      const changes = {...prevState.changes, [name]: value};

      if(this.props.profile[name] === value) { delete changes[name]; }

      return {changes};
    });
  }
  onSubmit = (e) => {
    e.preventDefault();

    update({user: this.state.changes}).then((data) => {
      if(data.success) { this.props.updateProfile(data.user); }
      if(data.message) {
        this.setState({
          alert: {
            content: data.message,
            type: data.success ? "success" : "danger"
          }
        });
      }
    });
  }
  value = (name) => (
    this.state.changes[name] || this.props.profile[name] || ""
  )
  render() {
    if(!this.props.profile) { return null; }

    const {alert} = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h3 className="text-center">Profile</h3>
            {alert && <Alert {...alert} onClose={this.clearAlert} />}
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="session-email">Email</label>
                <input className="form-control" id="session-email" name="email" onChange={this.onChange} placeholder="Email" type="email" value={this.value("email")} />
              </div>
              <div className="form-group">
                <label htmlFor="session-first-name">First Name</label>
                <input className="form-control" id="session-first-name" name="first_name" onChange={this.onChange} placeholder="First Name" type="text" value={this.value("first_name")} />
              </div>
              <div className="form-group">
                <label htmlFor="session-last-name">Last Name</label>
                <input className="form-control" id="session-last-name" name="last_name" onChange={this.onChange} placeholder="Last Name" type="text" value={this.value("last_name")} />
              </div>
              <div className="form-group">
                <label htmlFor="session-password">Password</label>
                <input className="form-control" id="session-password" name="password" onChange={this.onChange} placeholder="Password" type="password" value={this.value("password")} />
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
