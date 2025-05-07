//this is single line comment in JavaScript

/*this is a 
multi-line
comment in JavaScript*/

/*This variable will track the number of times the button is clicked.*/
var quoteList = ["Talk to yourself once in a day, otherwise you may miss meeting an intelligent person in this world.",
"In a conflict between the heart and the brain, follow your heart.",
"Be not Afraid of anything. You will do Marvelous work. it is Fearlessness that brings Heaven even in a moment."
];

var inspirationButton = document.getElementById("inspirationButton");

var quoteResult = document.getElementById("quote");

var counter = 0;

quoteResult.innerHTML = quoteList[counter]


inspirationButton.addEventListener("click" ,displayQuote);

function displayQuote(){
  quoteResult.innerHTML = quoteList[counter];
  counter ++;
  if (counter == quoteList.length){
    counter = 0;
      }

}

