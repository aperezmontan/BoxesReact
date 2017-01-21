// var rootUrl = 'http://localhost:3000'

// module.exports = function(route = null, params = null, body = null){
//   var searchUrl = `${rootUrl}`;

//   if (route !== 'null') {
//     searchUrl = `${rootUrl}/${route}`;
//     if(params){
//       searchUrl = `${searchUrl}/${params}`;
//     }
//     return fetch(searchUrl).then((response) => response.json());
//   }
//   else {
//     return fetch(searchUrl).then((response) => response.json());
//   }
// }

export const get = (path) => (
  fetch(`http://localhost:3000/${path}`)
  .then((response) => response.json())
);