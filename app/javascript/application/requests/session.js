import headers from "application/requests/headers";

export const create = (params) => (
  fetch("/api/session", {
    body: JSON.stringify(params),
    headers: headers(),
    method: "POST"
  }).then((response) => (response.json()))
);

export const destroy = () => (
  fetch("/api/session", {
    headers: headers(),
    method: "DELETE"
  }).then((response) => (response.json()))
);
