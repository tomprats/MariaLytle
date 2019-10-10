import headers from "application/requests/headers";

export const create = (params) => (
  fetch("/api/shows", {
    body: JSON.stringify(params),
    headers: headers(),
    method: "POST"
  }).then((response) => (response.json()))
);

export const destroy = (id) => (
  fetch(`/api/shows/${id}`, {
    headers: headers(),
    method: "DELETE"
  }).then((response) => (response.json()))
);

export const fetchAll = () => (
  fetch("/api/shows", {
    headers: headers(),
    method: "GET"
  }).then((response) => (response.json()))
);

export const fetchOne = (id) => (
  fetch(`/api/shows/${id}`, {
    headers: headers(),
    method: "GET"
  }).then((response) => (response.json()))
);

export const update = (id, params) => (
  fetch(`/api/shows/${id}`, {
    body: JSON.stringify(params),
    headers: headers(),
    method: "PUT"
  }).then((response) => (response.json()))
);
