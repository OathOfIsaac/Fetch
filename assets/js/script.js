var factButtonEl = document.querySelector("dog fact");

var api = 'https://dog-api.kinduff.com/api/facts';
var parameter = '?number=1';

function setup() {
    createCanvas(400,200);

var button = select('dogFact');
factButtonEl.addEventListener('click', getFact);
}

function getFact() {
    var url = api + parameter; 
    loadJSON(url, gotData);
}

function gotData(data) {
    dogFact = data;
}



console.log(dogFactEl);
