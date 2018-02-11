/***********************************************************************************************
** Random Code Generator
** By: Omari Bennett 2/10/18
**
** 	Requirements:
**		Array of objects is named quotes
**			Array contains at least 5 quote objects
**
**		Objects in array include quote and source properties. If known, citation and date properties are present
**			Objects in array include additional properties, such as categorization tags
**
**		Function is named getRandomQuote and returns a random object from the quotes array
**		Function named printQuote calls the getRandomQuote function
**			Function prints the quote to the page using the template supplied in the project instructions
**
**		Comments are included in the code.
**
** Exceeds Expectations:
**		I'm shooting for the "Exceeds Expectations" grade by:
**			Add more properties to the quote object. For example, a tags property could include a list of "tags" like "humor", "business", or "politics" to categorize each quote.
**			Quotes change automatically after certain amount of time passes
**			Background color changes each time the quote changes
**
** Note: I made two printQuote functions; the first one pass a string of HTML to the DOM.
** 		 The other bulid the HTML tags on to the DOM with JS.
**
** Bugs: If you click `start auto timer` button first, then the `end auto time` dose not works
**
**
***********************************************************************************************/
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);
'use strict';

let quoteObj, time, output,
	button = document.getElementById('loadQuote'),
	quoteDiv = document.querySelector("#quote-box"),
	div = document.querySelector(".container"),
	p = document.createElement("p"),
	sourceP = document.createElement("p"),
	citationSpan = document.createElement("span"),
	yearSpan = document.createElement("span"),
	startTimer = document.createElement("button"),
	endTimer = document.createElement("button"),
	loveTagButton = document.createElement("button"),
	natureTagButton = document.createElement("button");

//Array of objects is named quotes
	//Array contains at least 5 quote objects
let quotes = [
	{
		quote: "You can do anything but not everything",
		source: "David Allen",
		citation: "Making It All Work",
		year: 2009
	},
	{
		quote: "Don't cry because it's over, smile because it happened.",
		source: "Dr. Seuss"
	},
	{
		quote: "The Way Get Started Is To Quit Talking And Begin Doing",
		source: "Walt Disney"
	},
	{
		quote: "I believe that unarmed truth and unconditional love will have the final word in reality. This is why right, temporarily defeated, is stronger than evil triumphant.",
		source: "Martin Luther King, Jr.",
		citation: "The Wisdom of Martin Luther King, Jr",
		year: 1993
	},
	{
		quote: "Be a loner. That gives you time to wonder, to search for the truth. Have holy curiosity. Make your life worth living.",
		source: "Albert Einstein",
		citation: "Einstein and the Poet",
		year: 1983
	},
	{
		quote: "A company is stronger if it is bound by love rather than by fear.",
		source: "Herb Kelleher",
		tags: "Love"
	},
	{
		quote: "No one is born hating another person because of the colour of his skin, or his background, or his religion. People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite.",
		source: "Nelson Mandela",
		citation: "Long Walk to Freedom",
		year: 1995
	},
	{
		quote: "Be a loner. That gives you time to wonder, to search for the truth. Have holy curiosity. Make your life worth living.",
		source: "Albert Einstein",
		citation: "Einstein and the Poet",
		year: 1983,
		tags: "Love"
	},
	{
		quote: "Men always want to be a woman's first love - women like to be a man's last romance.",
		source: "Morihei Ueshiba",
		citation: "The Art of Peace",
		year: 1992,
		tags: "Nature"
	},
	{
		quote: "Each day of human life contains joy and anger, pain and pleasure, darkness and light, growth and decay. Each moment is etched with nature's grand design - do not try to deny or oppose the cosmic order of things.",
		source: "Oscar Wilde",
		citation: "A Woman of No Importance",
		year: 1893,
		tags: "Love"
	},
	{
		quote: "Beautiful young people are accidents of nature, but beautiful old people are works of art.",
		source: "Eleanor Roosevelt",
		tags: "Nature"
	},
	{
		quote: "If the sight of the blue skies fills you with joy, if a blade of grass springing up in the fields has power to move you, if the simple things of nature have a message that you understand, rejoice, for your soul is alive.",
		source: "Eleonora Duse",
		category: "Nature"
	},
	{
		quote: "Men always want to be a woman's first love - women like to be a man's last romance.",
		source: "Oscar Wilde",
		citation: "A Woman of No Importance",
		year: 1893,
		tags: "Love"
	},
	{
		quote: "If you love life, don't waste time, for time is what life is made up of.",
		source: "Bruce Lee",
		citation: "Striking Thoughts: Bruce Lee's Wisdom for Daily Living",
		year: 2000,
		tags: "Love"
	},
	{
		quote: "If the machine of government is of such a nature that it requires you to be the agent of injustice to another, then, I say, break the law.",
		source: "Henry David Thoreau",
		citation: "Civil Disobedience",
		year: 1849,
		tags: "Nature"
	},
	{
		quote: "No man should bring children into the world who is unwilling to persevere to the end in their nature and education.",
		source: "Plato",
		tags: "Nature"
	}
];

// Array of hex color code
let hue = [
	"#000099", //Blue
	"#009933", //Green
	"#ff0000", //Red
	"#cc0099", //Purple
	"#ff9933", //Orange
	"#666699",
	"#ff00ff",
	"#36b55c"
];

function getRandomQuote( quotes ) {
	// Get a random number from an array of object
	let maxNubmer = quotes.length,
		randomQuote = Math.floor(Math.random() * maxNubmer);

	// return the random quote object
	return quotes[randomQuote];
}

function printQuote( obj ) {
	//Set the getRandomQuote to quoteObj
	quoteObj = getRandomQuote( obj );

	output = `<p class="quote">${quoteObj.quote}</p>`;
	output += `<p class="source">${quoteObj.source}`;

	//Check if the obj has citation, year in the obj & append it to the page
	if ( quoteObj.citation && quoteObj.year ) {
		output += `<span class="citation">${quoteObj.citation}</span>`;
		output += `<span class="year">${quoteObj.year}</span></p>`;
	} else if ( quoteObj.citation ) {
		output += `<span class="citation">${quoteObj.citation}</span>`;;
	} else if ( quoteObj.year ) {
		output += `<span class="year">${quoteObj.year}</span></p>`;
	}	return document.getElementById('quote-box').innerHTML = output;
}

// function printQuote( obj ) {
// 	//Set the getRandomQuote to quoteObj
// 	quoteObj = getRandomQuote( obj );

// 	//Setting HTML attributes
// 	p.setAttribute("class", "quote"),
// 	sourceP.setAttribute("class", "source"),
// 	citationSpan.setAttribute("class", "citation"),
// 	yearSpan.setAttribute("class", "year");

// 	//Placing the obj in the HTML tag
// 	p.innerHTML = quoteObj.quote,
// 	sourceP.innerHTML = quoteObj.source,
// 	citationSpan.innerHTML = quoteObj.citation,
// 	yearSpan.innerHTML = quoteObj.year;

// 	//Append the HTML tags to the page
// 	quoteDiv.appendChild( p ),
// 	quoteDiv.appendChild( sourceP );

// 	//Check if the obj has citation, year in the obj & append it to the page
// 	if ( quoteObj.citation && quoteObj.year ) {
// 		sourceP.appendChild( citationSpan );
// 		sourceP.appendChild( yearSpan );
// 	} else if ( quoteObj.citation ) {
// 		sourceP.appendChild( citationSpan );
// 	} else if ( quoteObj.year ) {
// 		sourceP.appendChild( yearSpan );
// 	}
// }

function changeColor(color) {
	//Get a random color from the hue array 
	let max = color.length,
	body = document.querySelector("body"),
	randomHue = Math.floor( Math.random() * max);

	//Change the background the random color
	body.style.backgroundColor = color[randomHue];
}

function categoryTag( arr, tag ) {
	//Make a new array with matching tag
	let quotesArray = [];

	//Set the quotes array to quoteObj
	let quoteObj = arr;

	//Loop through the array and use the `push()` methond to add to the quotesArray
	for (let i =0; i < quoteObj.length; i++) {
		if ( quoteObj[i].tags === tag ) {
			quotesArray.push(quoteObj[i]);
		}
	}
	return quotesArray;
}

//Start auto timer button attributes
startTimer.textContent = "Start auto timer",
startTimer.type = "button",
startTimer.setAttribute("class", "timerButton"),
div.appendChild( startTimer );

//End auto timer button attributes
endTimer.textContent = "End auto timer",
endTimer.type = "button",
endTimer.setAttribute("class", "rightTimerButton"),
div.appendChild( endTimer );

//loveTagButton attributes
loveTagButton.textContent = "Love quotes",
loveTagButton.type = "button",
loveTagButton.setAttribute("class", "loveQuotesButton"),
div.appendChild( loveTagButton );

//natureTagButton attributes
natureTagButton.textContent = "Nature quotes",
natureTagButton.type = "button",
natureTagButton.setAttribute("class", "loveQuotesButton"),
div.appendChild( natureTagButton );

//Print random quote
printQuote( quotes );

//Set a timer to change quote & backgroud color every 30 sec.
let timer = window.setInterval(() => {
 	printQuote( quotes ),
 	changeColor( hue );
 }, 30000);

//Show another quote button runs `printQuote` & `changeColor` functions
button.addEventListener("click", () => {
	printQuote( quotes ),
	changeColor( hue );
});

//Runs `printQuote` & `changeColor` functions inside the `setInterval`function
startTimer.addEventListener("click", ()=> {
	timer = window.setInterval(() => {
 	printQuote( quotes ),
	changeColor( hue );
 }, 30000);
});

//Stop the setInterval function with the clearInterval function
endTimer.addEventListener("click", ()=> {
	clearInterval( timer );
});

//Runs `printQuote` & `changeColor` functions when the Love quote button is click
loveTagButton.addEventListener("click", ()=> {
	let arrayByTag = categoryTag( quotes, "Love" );
	printQuote( arrayByTag ),
	changeColor( hue );
});

//Runs `printQuote` & `changeColor` functions when the Nature button is click
natureTagButton.addEventListener("click", ()=> {
	let arrayByTag = categoryTag( quotes, "Nature" );
	printQuote( arrayByTag ),
	changeColor( hue );
});