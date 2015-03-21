Titanium.UI.setBackgroundColor("#000");

var mainWindow = Ti.UI.createWindow({
	text:"Dan's Favorite Guitars",
	font: {fontSize: 25, fontFamily:"Arial"},
	color: "white",
	textAlign: "center"
});

var border = Ti.UI.createView({
	height: 20,
	top: 0,
	backgroundColor: "fff"
});

var titleLabel = Ti.UI.createLabel({
	text:"Dan's Favorite Guitars",
	top: 50,
	font: {fontSize: 25, fontFamily:"Arial"},
	color: "white",
	textAlign: "center"
});

var titleImage = Ti.UI.createView({
	backgroundImage: "cover.jpg",
	borderRadius: 5,
	top: 100,
	left: 40,
	right: 40,
	bottom: 120
});

var startButton = Ti.UI.createLabel({
	height: 50,
	bottom: 35,
	left: 30,
	right: 30,
	borderRadius: 10,
	backgroundColor: "white",
	text: "View Gallery",
	color: "Grey",
	font: {fontSize: 25, fontFamily:"Arial"},
	textAlign: "center"
});

var getImage = function(){
	var openFile = require("gallery");
};

startButton.addEventListener("click", getImage);
mainWindow.add(startButton, titleImage, titleLabel, border);
mainWindow.open();