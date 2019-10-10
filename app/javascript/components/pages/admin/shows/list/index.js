import {Component} from "react";
import {destroy, fetchAll as fetchShows} from "application/requests/shows";
import {Alert} from "components/helpers";
import Row from "./row";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {shows: []};
  }
  componentDidMount() {
    this.fetchShows();
  }
  destroy = (id) => {
    destroy(id).then((data) => {
      if(data.success) { this.fetchShows(); }
      if(data.message) {
        this.setState({alert: {content: data.message, type: "danger"}});
      }
    });
  }
  fetchShows = () => {
    fetchShows().then((data) => (this.setState({shows: data.shows})));
  }
  render() {
    const {alert, shows} = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3 className="text-center">Shows</h3>
            {alert && <Alert {...alert} />}
            <div className="text-center">
              <a className="btn btn-secondary m-3" href="/admin/shows/new">New Show</a>
            </div>
            <div className="table-responsive rounded">
              <table className="table table-hover">
                <thead className="table-borderless">
                  <tr className="text-center">
                    <th>Date</th>
                    <th>Venue</th>
                    <th>Updated At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {shows.map((show) => (
                    <Row key={show.id} destroy={this.destroy} show={show} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
