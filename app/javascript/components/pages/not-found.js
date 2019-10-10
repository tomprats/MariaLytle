import {Component} from "react";

export default class NotFound extends Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <h1>Not Found</h1>
        <p>Are you where you want to be?</p>
        <p className="mt-5">But really, this is a 404 error. There's no page at this URL.</p>
      </div>
    );
  }
}
