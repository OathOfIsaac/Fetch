var factButton = document.getElementById('dog-fact');
var factPrint = document.getElementById('fact-print')

factButton.addEventListener('click' , getFact )

var api = 'https://dog-api.kinduff.com/api/facts';
var parameter = '?number=1'

// fetch(apiUrl)
// .then(function (res) {
//     return res.json();
//   })
//   .then(function (data) {
//     renderItems(city, data);
//   })
//   .catch(function (err) {
//     console.error(err);
//   });
// }



function getFact() {
    var url = api + parameter; 
    console.log(url);
    console.log('hello');
    
}

function gotData(data) {
    dogFact = data;
}