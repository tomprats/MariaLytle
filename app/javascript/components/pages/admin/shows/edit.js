import PropTypes from "prop-types";
import {Component} from "react";
import {fetchOne as fetchShow, update} from "application/requests/shows";
import {Alert, Loading} from "components/helpers";
import Form from "./form";

export default class Edit extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }
  constructor(props) {
    super(props);

    this.state = {changes: {}};
  }
  componentDidMount() {
    const {id} = this.props.match.params;

    fetchShow(id).then(({show}) => {
      this.setState({changes: {}, show});
    });
  }
  clearAlert = () => {
    this.setState({alert: null});
  }
  onChange = (newChanges) => {
    this.setState(({changes}) => ({changes: {...changes, ...newChanges}}));
  }
  onSubmit = () => {
    const {changes, show} = this.state;

    update(show.id, {show: changes}).then((data) => {
      if(data.success) {
        this.setState({
          alert: {content: data.message, type: "success"},
          changes: {},
          show: data.show
        });
      } else {
        this.setState({alert: {content: data.message, type: "danger"}});
      }
    });
  }
  value = (name) => {
    const {changes, show} = this.state;

    return name in changes ? changes[name] : show[name];
  }
  render() {
    const {alert, show} = this.state;

    if(!show) { return <Loading />; }

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
