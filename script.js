var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function () {
  var countries = JSON.parse(this.response);
  console.log(countries);
  for (let i in countries) {
    console.log(countries[i].name);
    console.log(countries[i].flag);
    console.log(countries[i].region);
    console.log(countries[i]["subregion"]);
    console.log(countries[i].population);
    console.log(" --------"); //for a gap
  }
};
xhr.onerror = function () {
  console.log("Error", this.statusText);
};
xhr.send();
 