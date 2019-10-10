import PropTypes from "prop-types";
import {Component} from "react";

export default class Alert extends Component {
  static defaultProps = {
    onClose: null,
    type: "primary"
  }
  static propTypes = {
    content: PropTypes.string.isRequired,
    onClose: PropTypes.func,
    type: PropTypes.string
  }
  constructor(props) {
    super(props);

    this.state = {show: true};
  }
  onClose = (e) => {
    e.preventDefault();

    this.props.onClose
      ? this.props.onClose()
      : this.setState({show: false});
  }
  render() {
    if(!this.state.show) { return null; }

    const {content, type} = this.props;

    return (
      <div className={`alert alert-${type} alert-dismissible`} role="alert">
        {content}
        <button aria-label="Close" className="close" onClick={this.onClose} type="button">
          <i className="fas fa-times" />
        </button>
      </div>
    );
  }
}
