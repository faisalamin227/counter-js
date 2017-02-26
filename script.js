
// Variable Declaration
var click = document.getElementById("first");
var jump = document.getElementById("second");

var score = document.getElementById("score");


// Click Functions - Increment
function increment(){
		click.innerHTML = 'You have clicked the first box!';
		
		if (score.textContent === '0'){
			var i = 0;
			score.innerHTML = ++i;
	}
		else{
			score.innerHTML = parseInt(score.textContent) + 1;
		}}

// Click Functions - Decrement
function decrement(){
	jump.innerHTML = "You have clicked the second box!"

	if(score.textContent > '0'){
		score.innerHTML = parseInt(score.textContent) - 1;
	}
}
