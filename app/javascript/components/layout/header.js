import {Component} from "react";
import background from "assets/images/background.jpg";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img alt="Maria" src={background} />
        <div>
          <h1>Maria Lytle</h1>
          <h2>Singer/Songwriter</h2>
        </div>
      </div>
    );
  }
}
