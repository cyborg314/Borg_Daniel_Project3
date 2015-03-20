var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var rowCount = 4;
var margin = 10;
var trueCanvasWidth = pWidth - margin * (rowCount+1);
var size = trueCanvasWidth / rowCount;

var imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var imageFiles = imagesFolder.getDirectoryListing();


var galleryWindow = Ti.UI.createWindow({
	layout: "horizontal",
	title: "Guitar Gallery",
});


var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: galleryWindow
});

var border = Ti.UI.createView({
	backgroundColor: "#cecece",
	height: 1,
	width: pWidth,
	top: 0
});

var backButton = Ti.UI.createLabel({
	bottom: 0,
	height: 50,
	width: "100%",
	backgroundColor: "black",
	text: "Close Gallery",
	color: "white",
	textAlign: "center"
});

var closeGallery = function(){
	var startOver = require("app");
	mainWindow.open();
	navWindow.close();
};

//backButton.add(backButtonLabel);
backButton.addEventListener("click", closeGallery);
navWindow.add(backButton);

var viewContainer = Ti.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	height: pHeight-border.height-border.top-backButton.height-60,
	contentWidth: pWidth,
	showVerticalScrollIndicator: true,
	backgroundColor: "#fef", 
	
});

galleryWindow.add(border, viewContainer);

var getImage = function(){
	var imageWindow = Ti.UI.createWindow({
		title: this.image,
		backgroundColor: "#cecece"
	});
	var myImage = Ti.UI.createImageView({
		image: this.image,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0 
});

	galleryWindow.add(imageWindow, myImage);
	imageWindow.add(myImage);
	navWindow.openWindow(imageWindow);
};	

for(var i=0; i<imageFiles.length; i++){
	var view = Ti.UI.createView({
		background: "#33CCFF",
		top: margin,
		left: margin,
		width: size,
		height: size
	});
	var thumb = Ti.UI.createImageView({
		image: "images/" + imageFiles[i],
		width: view.width*2
	});
	
	view.add(thumb);
	viewContainer.add(view);
	thumb.addEventListener("click", getImage);
}

navWindow.add(galleryWindow);
navWindow.open();
