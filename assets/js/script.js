// var factButton = document.getElementById('dog-fact');
// var factPrint = document.getElementById('fact-print')

// factButton.addEventListener('click' , getFact )

// var api = 'https://dog-api.kinduff.com/api/facts';
// var parameter = '?number=1'

// // fetch(apiUrl)
// // .then(function (res) {
// //     return res.json();
// //   })
// //   .then(function (data) {
// //     renderItems(city, data);
// //   })
// //   .catch(function (err) {
// //     console.error(err);
// //   });
// // }



// function getFact() {
//     var url = api + parameter; 
//     console.log(url);
//     console.log('hello');
    
// }

// function gotData(data) {
//     dogFact = data;
// }
var userFormEl = document.querySelector("#user-form");
// var dogNameInputEl = document.querySelector("#dog-name");
var dogBreedInputEl = document.querySelector("#dog-breed");
// var nameInputEl = document.querySelector("#name");
// var phoneInputEl = document.querySelector("#phone");
// var emailInputEl = document.querySelector("#email");
var dogFactBtnEl = document.querySelector(".fact-btn")
var dogFactReturnEl = document.querySelector("#dog-fact-return")
var cardFormEl = document.querySelector('#card-form');
var dogBreedReturnEl = document.querySelector('#dog-breed-img')



var getDogFact = function () {
    //format github api url
    var parameter = "?number=1"
    var apiUrl = 'https://cors-anywhere.herokuapp.com/https://dog-api.kinduff.com/api/facts' + parameter
    
    //make a request to the url
    fetch(apiUrl)
        .then(function (response) {
        // request was successful
        if (response.ok) {
            response.json().then(function (data) {
                displayFact(data);
                console.log(data);
            }).catch(function(err){
                console.log(err)
            });
        } else {
            console.log('Error: DogFactAPI Not Found')
        }
    })
    .catch(function (error) {
        //Notice this '.catch()' getting chained onto the end of the '.then()' method
        console.log('Unable to connect');
    });
};

function displayFact(apiReturn) {
    dogFactReturnEl.textContent= apiReturn.facts[0]
}

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
    var breedValue = dogBreedInputEl.options[dogBreedInputEl.selectedIndex].value
    // var breedText = dogBreedInputEl.options[dogBreedInputEl.selectedIndex].textContent 
  
    // var breedTextFix = breedText.replace( " ","-")
    // var breedValueFix = breedValue.split("-").reverse().join('-')
    var breed = breedValue.replace("-","/")
    console.log(breed)
    var apiUrl='https://dog.ceo/api/breed/' + breed + '/images/random'
    fetch(apiUrl).then(function(res){
        return res.json()
    }).then(function(data){
        console.log(data);
        show_image(data.message);
    });

    function show_image(data) {
        //var dogBreedReturnEl = document.querySelector('#dog-breed-img') - for reference 
        var img = dogBreedReturnEl;
        //var imgLink = String(data.message)
        //console.log(imgLink)
        img.setAttribute("src", data);
        localStorage.setItem("dog-history", data)

    
        //cardFormEl.appendChild(img);
        
    }
    
}

var searchHistory = localStorage.getItem("dog-history")

dogBreedReturnEl.src = searchHistory




dogFactBtnEl.addEventListener('click', getDogFact)
userFormEl.addEventListener('submit', formSubmitHandler)


