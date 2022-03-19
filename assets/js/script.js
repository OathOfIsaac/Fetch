var factButton = document.getElementById('dog-fact');
var factPrint = document.getElementById('fact-print')

factButton.addEventListener('click' , getFact )

var api = 'http://dog-api.kinduff.com';



function getFact() {
    var url = api + parameter; 
    console.log(url)
}

function gotData(data) {
    dogFact = data;
}

console.log
