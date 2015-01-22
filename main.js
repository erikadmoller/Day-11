// var color = [0, 0, 0]
// // Create a variable that will hold the RGB colors (to turn into an array)

// function changeColor() {

// 	var animate = document.getElementByTagName('body');

// 	color[0] += Math.floor(Math.random()*2);
// 	color[1] += Math.floor(Math.random()*4);
// 	color[2] += Math.floor(Math.random()*6);
// // Create a function that generates random numbers that get logged into a reference of each position of the RGB array variable 'color'
// 	for(var key in color) {
// // Creating the 'for' loop will keep this function running if RGB colors exceed 255.
// 		// Created a variable 'key' within variable 'color'.
// 		if(color[key]) >= 255) {
// 	// Argument: If 'key' finds and RGB position that exceeds 255, will set it to 0.
// 		color[key] = 0;
// 		}
// 	}
// 	// Taking the resulting 'array' and turning it into the string RGB().
// 	// 
// 	animate[0].style.backgroundColor = 'rgb('+color.join(',')+')';
// }

var color = [0,0,0];

function changeColor(){
		var animate = document.getElementsByTagName('body');
		
		color[0] += Math.floor(Math.random()*8);
		color[1] += Math.floor(Math.random()*12);
		color[2] += Math.floor(Math.random()*5);
		for(var key in color){
			if(color[key] >= 255){
				color[key] = 0;
			}
		}
		animate[0].style.backgroundColor = 'rgb('+color.join(',')+')';
	}

function renderTime() {
	var currentTime = new Date();
	var diem = "AM";
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();

	document.getElementById('clockDisplay').innerHTML = h%12 + ":" + m + ":" + s + " " + diem;
	changeColor(); 
}
renderTime();
window.setInterval(renderTime, 1000);

