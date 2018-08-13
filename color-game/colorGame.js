// JavaScript Document

var colors = [];

var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var colorDisplay = document.querySelector("#colorDisplay");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var easy = false;
var hard = true;

var num=6;

var pickedColor;

var game = {};


function newGame(){	
	if(hard) num=6;
	else num=3;
	
	colors = generateRandomColors(num);
	
	for(var i=0; i<squares.length; i++) squares[i].style.backgroundColor = colors[i];	
	
	pickedColor = colors[Math.floor(Math.random()*colors.length)];
	colorDisplay.textContent = pickedColor;
	
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else squares[i].style.display = "none";
	}
	
	h1.style.backgroundColor = "steelblue";
	resetBtn.textContent = "New Colors";
	messageDisplay.textContent = "";
}

for(var i=0; i<squares.length; i++){
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetBtn.textContent = "Play again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
}

resetBtn.addEventListener("click", newGame);


function changeColors(color){
	for(var i=0; i<colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		var r1 = Math.floor(Math.random()*256);
		var r2 = Math.floor(Math.random()*256);
		var r3 = Math.floor(Math.random()*256);
		
		var newColor = "rgb(" + r1 + ", " + r2 + ", " + r3 + ")";
		arr.push(newColor);
	}
	return arr;
}

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	easy=true;
	hard=false;
	newGame();
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	hard=true;
	easy=false;
	newGame();
});

newGame();

