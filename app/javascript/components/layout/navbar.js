import {Component} from "react";

// Similar to https://react-bootstrap.netlify.com/components/navbar/
export default class Navbar extends Component {
  componentDidMount() {
    window.addEventListener("resize", this.closeMenusOnResize, false);
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
  toggleMenu = (e) => {
    const collapse = e.target.closest("nav").querySelector(".navbar-collapse");

    collapse.classList.toggle("collapse");
    collapse.classList.toggle("in");
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md">
        <button className="navbar-toggler" type="button" aria-label="Toggle navigation" onClick={this.toggleMenu}>
          <h3><i className="fas fa-fw fa-bars" /> Menu</h3>
        </button>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link" href="/"> Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shows"> Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.youtube.com/user/marialytle" rel="noopener noreferrer" target="_blank"><i className="fab fa-fw fa-youtube" /> Youtube</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.facebook.com/marialytlemusic" rel="noopener noreferrer" target="_blank"><i className="fab fa-fw fa-facebook" /> Facebook</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://soundcloud.com/maria-lytle" rel="noopener noreferrer" target="_blank"><i className="fab fa-fw fa-soundcloud" /> SoundCloud</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.cdbaby.com/cd/marialytle" rel="noopener noreferrer" target="_blank"><i className="fas fa-fw fa-music" /> CD Baby</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact Maria</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
