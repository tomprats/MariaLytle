import {Component} from "react";
import {fetchAll as fetchShows} from "application/requests/shows";
import {Loading} from "components/helpers";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {loaded: false};
  }
  componentDidMount() {
    fetchShows().then((data) => {
      this.setState({loaded: true, shows: data.shows});
    });
  }
  render() {
    const {loaded, shows} = this.state;
    const dateOptions = {day: "numeric", month: "long", timeZone: "UTC", weekday: "long"};

    return (
      <div className="container-fluid content">
        <h3 className="text-center">Shows</h3>
        {loaded ? (
          <div className="row text-center">
            <div className="col-md-6 offset-md-3">
              {(shows.length > 0) ? (
                shows.map((show) => {
                  const date = new Date(show.date);

                  return (
                    <p key={show.id} className="mb-1">
                      <i>{date.toLocaleDateString("en-US", dateOptions)}</i> - {show.venue}
                    </p>
                  );
                })
              ) : (
                <p>There are no upcoming shows</p>
              )}
            </div>
          </div>
        ) : (
          <Loading className="text-center" />
        )}
      </div>
    );
  }
}
