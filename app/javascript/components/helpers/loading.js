import {Component} from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <i className="fa fa-spinner fa-spin fa-2x" />
      </div>
    );
  }
}
