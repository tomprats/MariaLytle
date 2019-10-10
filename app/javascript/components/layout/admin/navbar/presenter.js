import PropTypes from "prop-types";
import {Component} from "react";
import {Redirect} from "react-router-dom";
import {fetchCurrent as fetchProfile} from "application/requests/profile";
import {destroy as destroySession} from "application/requests/session";

// Similar to https://react-bootstrap.netlify.com/components/navbar/
export default class Navbar extends Component {
  static defaultProps = {profile: null}
  static propTypes = {
    profile: PropTypes.shape({
      id: PropTypes.number.isRequired
    }),
    updateProfile: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);

    this.state = {unauthenticated: false};
  }
  componentDidMount() {
    window.addEventListener("resize", this.closeMenusOnResize, false);

    fetchProfile().then((data) => {
      data.user && this.props.updateProfile(data.user);
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.closeMenusOnResize, false);
  }
  closeMenusOnResize = () => {
    if(document.body.clientWidth < 768) { return; }

    [...document.querySelectorAll(".navbar-collapse")].forEach((collapse) => {
      collapse.classList.add("collapse");
      collapse.classList.remove("in");
    });
  }
  destroySession = () => {
    destroySession().then((data) => {
      this.setState({unauthenticated: data.success});
    });
  }
  toggleMenu = (e) => {
    const collapse = e.target.closest("nav").querySelector(".navbar-collapse");

    collapse.classList.toggle("collapse");
    collapse.classList.toggle("in");
  }
  render() {
    if(this.state.unauthenticated) {
      const state = {message: "Logged Out", type: "danger"};

      return <Redirect to={{pathname: "/", state}} />;
    }

    const {profile} = this.props;

    return (
      <nav className="admin-navbar navbar navbar-expand-md navbar-dark bg-primary">
        <button className="navbar-toggler" type="button" aria-label="Toggle navigation" onClick={this.toggleMenu}>
          <h3><i className="fas fa-fw fa-bars" /> Admin</h3>
        </button>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav justify-content-center">
            {profile ? [
              <li key="profile" className="nav-item">
                <a className="nav-link" href="/admin/profile">Profile</a>
              </li>,
              <li key="shows" className="nav-item">
                <a className="nav-link" href="/admin/shows">Shows</a>
              </li>,
              <li key="logout" className="nav-item">
                <button className="btn btn-link nav-link" onClick={this.destroySession} type="button">Logout</button>
              </li>
            ] : (
              <li key="login" className="nav-item">
                <a className="nav-link" href="/admin/sessions">Login</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}
