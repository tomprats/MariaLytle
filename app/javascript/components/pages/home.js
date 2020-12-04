import {Component} from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid content">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h3>About Me</h3>
            <p>Soulful, confessional, acoustic storytelling</p>
            <p>
              A charming singer-songwriter who moonlights as a therapist, Maria Lytle has always
              been fascinated by thoughts, and the power they have to shift our perspective and find
              beauty everywhere.  Exploring ideas of insecurity and confidence, trauma and growth,
              loss and love - Maria’s confessional storytelling, rich voice, and soothing melodies
              embrace the fullness of life and remind us of the thoughts that keep us going.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
