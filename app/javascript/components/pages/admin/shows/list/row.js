import PropTypes from "prop-types";
import {Component} from "react";
import {displayDate} from "application/helpers";

export default class Row extends Component {
  static propTypes = {
    destroy: PropTypes.func.isRequired,
    show: PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
      venue: PropTypes.string.isRequired
    }).isRequired
  }
  destroy = () => {
    this.props.destroy(this.props.show.id);
  }
  render() {
    const {show} = this.props;

    return (
      <tr className="text-center">
        <td>{displayDate(show.date)}</td>
        <td>{show.venue}</td>
        <td>{displayDate(show.updated_at)}</td>
        <td>
          <div className="btn-group" role="group" aria-label="Actions">
            <a className="btn btn-sm btn-secondary" href={`/admin/shows/${show.id}/edit`}>Edit</a>
            <button type="button" className="btn btn-sm btn-danger" onClick={this.destroy}>Destroy</button>
          </div>
        </td>
      </tr>
    );
  }
}
