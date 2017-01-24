const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

export const get = (path) => (
  fetch(`http://localhost:3000/${path}`)
  .then((response) => response.json())
);

export const post = (path, data) => (
  fetch(`http://localhost:3000/${path}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  })
  .then((response) => response.json())
);