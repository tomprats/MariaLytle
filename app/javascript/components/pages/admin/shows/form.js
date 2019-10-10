import PropTypes from "prop-types";
import {Component} from "react";

export default class Form extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props);

    this.state = {};
  }
  onChange = (e) => {
    const {name} = e.target;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const changes = {[name]: value};

    this.props.onChange(changes);
  }
  onSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit();
  }
  value = (name) => (this.props.value(name) || "")
  render() {
    const {onChange, onSubmit, value} = this;

    return (
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="show-date">Date</label>
          <input className="form-control" id="show-date" name="date" onChange={onChange} placeholder="Date" type="date" value={value("date")} />
        </div>
        <div className="form-group">
          <label htmlFor="show-venue">Venue</label>
          <input className="form-control" id="show-venue" name="venue" onChange={onChange} placeholder="Venue" type="text" value={value("venue")} />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    );
  }
}
