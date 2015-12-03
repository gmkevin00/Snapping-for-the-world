window.addEventListener("load", function() {
	var getCameraImg = new GetCameraImg();
	getCameraImg.start();
	var getCloudImg = new GetCloudImg();
	getCloudImg.start();
	var storePicture = new StorePicture();
	storePicture.start();
});
