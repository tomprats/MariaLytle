import headers from "application/requests/headers";

export const fetchCurrent = () => (
  fetch("/api/profile", {
    headers: headers(),
    method: "GET"
  }).then((response) => (response.json()))
);

export const update = (params) => (
  fetch("/api/profile", {
    body: JSON.stringify(params),
    headers: headers(),
    method: "PUT"
  }).then((response) => (response.json()))
);
