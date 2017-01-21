export const get = (path) => (
  fetch(`http://localhost:3000/${path}`)
  .then((response) => response.json())
);