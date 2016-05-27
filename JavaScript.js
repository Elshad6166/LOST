// Picture1 img Zoom Script
function bigImg14(x) {
	x.style.height = "200px";
	x.style.width = "430px";
}
function normalImg14(x) {
	x.style.height = "200px";
	x.style.width = "530px";
}

// Picture3 img Click change Script

function changeImg() {
    document.getElementById("myImg3").src = "images/apple1.jpg";
}

// E-mail OnFocus, change Script
function focusFunction() {
    document.getElementById("inputEmail").style.background = "yellow";
}

// Blur Changes the background color of input to red
function blurFunction() {
    document.getElementById("inputEmail").style.background = "red";
}

function emailAlert() {
alert("Sizin E-mailiniz sisteme elave olundu. :)");
}