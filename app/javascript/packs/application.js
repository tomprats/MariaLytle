import "core-js/stable";
import "regenerator-runtime/runtime";
import Rails from "@rails/ujs";
import {render} from "react-dom";
import {Provider} from "react-redux";
import store from "application/redux/store";
import Router from "components/router";
import "assets/stylesheets/application.scss";

Rails.start();

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <Router />
    </Provider>,
    document.querySelector("#app")
  );
});
