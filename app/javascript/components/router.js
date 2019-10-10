import {Component} from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import * as Layout from "components/layout";
import * as Pages from "components/pages";

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout.Header />
          <Route path="/admin" component={Layout.Admin.Navbar} />
          <Layout.Navbar />
          <Switch>
            <Route exact={true} path="/" component={Pages.Home} />
            <Route path="/admin/profile" component={Pages.Admin.Profile} />
            <Route path="/admin/session" component={Pages.Admin.Session} />
            <Route path="/admin/shows/new" component={Pages.Admin.Shows.New} />
            <Route path="/admin/shows/:id/edit" component={Pages.Admin.Shows.Edit} />
            <Route path="/admin/shows" component={Pages.Admin.Shows.List} />
            <Route path="/admin" component={Pages.Admin.Session} />
            <Route path="/contact" component={Pages.Contact} />
            <Route path="/shows" component={Pages.Shows} />
            <Route path="/" component={Pages.NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
