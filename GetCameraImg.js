'use strict';

(function(exports) {
	var GetCameraImg = function() {
		this.videoDisplay=document.getElementById('videoDisplay');
		
		this.camera;
		
		this.snapButton=document.getElementById('snapButton');
		
		this.startGetCameraImg=document.getElementById('startGetCameraImg');
		this.canvas=document.getElementById('img1');
		this.context = this.canvas.getContext('2d');
		
		
		this.cameraOptions = {
		  mode: 'video',
		  recorderProfile: 'high',
		  previewSize: {
			width: this.canvas.width,
			height: this.canvas.height
		  },
		};
				
		this.videoOptions = {
		  camera: navigator.mozCameras.getListOfCameras()[0]
		};

		
		
	};

	GetCameraImg.prototype = {
		start: function()
		{
			this.startGetCameraImg.addEventListener('click', function(event) {			  					
				var onSuccess=function (mycamera) {	
					console.log(mycamera.camera);
					this.displayVideo(mycamera);
					this.camera=mycamera;
					
				}.bind(this);
		
				navigator.mozCameras.getCamera(this.videoOptions, this.cameraOptions).then(onSuccess,this.err);
							
			}.bind(this));
			
			this.snapButton.addEventListener('click', function(event) {
				this.snapPicture(this.camera);					
			}.bind(this));
		},

		drawOriginImage: function(blob)
		{
			console.log(blob instanceof Blob) // true
		
			var imageData = new Image();
			var urlCreator = window.URL || window.webkitURL;
			imageData.src = urlCreator.createObjectURL(blob);
			
			
			imageData.onload = function() {
				this.context.globalAlpha=1;   // Full opacity
				this.context.drawImage(imageData,0,0,this.canvas.width,this.canvas.height);		

				exports.sourceImageData=imageData.src;
			}.bind(this);
				  
		},
		
		displayVideo: function( cameraControl ) {
			var size = cameraControl.camera.capabilities.previewSizes[0];
			this.videoDisplay.mozSrcObject = cameraControl.camera;
			this.videoDisplay.play();		
		},
		
		
		snapPicture: function(cameraControl)
		{	
			cameraControl.camera.takePicture().then(this.snapPicture_success.bind(this), this.err);		
		},
		
		
		snapPicture_success: function ( blob ) {
				this.drawOriginImage(blob);
			},

		err: function ( error ) {
				console.log(error);
		}
	
		
	};

	exports.GetCameraImg = GetCameraImg;

  

})(window);