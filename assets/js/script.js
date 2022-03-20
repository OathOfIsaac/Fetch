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
var userFormEl = document.querySelector("user-form");
var dogNameInputEl = document.querySelector("dog-name");
var dogBreedInputEl = document.querySelector("dog-breed");
var nameInputEl = document.querySelector("name");
var phoneInputEl = document.querySelector("phone");
var emailInputEl = document.querySelector("email");

var getDogFact = function (parameter) {
    //format github api url
    var apiUrl = 'https://dog-api.kinduff.com/api/facts' + paramater;
    parameter = ?number=1

    //make a request to the url
    fetch(apiUrl)
        .then(function (response) {
        // request was successful
        if (response.ok) {
            response.json()then(function (data) {
                displayFact(data, paramater);
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

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
    // get value from input element
    var name = 
}
