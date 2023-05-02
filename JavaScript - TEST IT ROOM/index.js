let rech = fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    affichePays(data);
  });

function affichePays(data) {}
