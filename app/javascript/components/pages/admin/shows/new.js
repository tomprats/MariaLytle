import {Component} from "react";
import {Redirect} from "react-router-dom";
import {create} from "application/requests/shows";
import {Alert} from "components/helpers";
import Form from "./form";

export default class New extends Component {
  constructor(props) {
    super(props);

    this.state = {show: {}};
  }
  clearAlert = () => {
    this.setState({alert: null});
  }
  onChange = (changes) => {
    this.setState(({show}) => ({show: {...show, ...changes}}));
  }
  onSubmit = () => {
    create({show: this.state.show}).then((data) => {
      if(data.success) {
        this.setState({submitted: true});
      } else {
        this.setState({alert: {content: data.message, type: "danger"}});
      }
    });
  }
  value = (name) => (this.state.show[name])
  render() {
    if(this.state.submitted) {
      const state = {message: "Show Created", type: "success"};

      return <Redirect to={{pathname: "/admin/shows", state}} />;
    }

    const {alert} = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h3 className="text-center">Show</h3>
            {alert && <Alert {...alert} onClose={this.clearAlert} />}
            <Form onChange={this.onChange} onSubmit={this.onSubmit} value={this.value} />
          </div>
        </div>
      </div>
    );
  }
}
