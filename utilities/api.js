var rootUrl = 'http://localhost:3000'

module.exports = function(route, params, body){
  var searchUrl = `${rootUrl}`;
  // console.log("Is the route null ?", route === 'null');
  // console.log(params);

  if (route !== 'null') {
    searchUrl = `${rootUrl}/${route}`;
    if(params){
      searchUrl = `${searchUrl}/${params}`;
    }
    return fetch(searchUrl).then((response) => response.json());
  }
  else {
    console.log(searchUrl);
    console.log("Skipped the first if !!")
    return fetch(searchUrl).then((response) => response.json());
  }
}