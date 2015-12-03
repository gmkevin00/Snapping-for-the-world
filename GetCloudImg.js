'use strict';

(function(exports) {
	var GetCloudImg = function() {
		this.canvas=document.getElementById('img1');
		this.context = this.canvas.getContext('2d');
		
		
	};

	GetCloudImg.prototype = {
		start: function()
		{	
			document.getElementById('p1').addEventListener("click",function(event) {this.drawOriginImage(1)}.bind(this));
			document.getElementById('p2').addEventListener("click",function(event) {this.drawOriginImage(2)}.bind(this));
			document.getElementById('p3').addEventListener("click",function(event) {this.drawOriginImage(3)}.bind(this));
			document.getElementById('p4').addEventListener("click",function(event) {this.drawOriginImage(4)}.bind(this));
			document.getElementById('p5').addEventListener("click",function(event) {this.drawOriginImage(5)}.bind(this));
			document.getElementById('p6').addEventListener("click",function(event) {this.drawOriginImage(6)}.bind(this));		
		},
		addCloudImage: function(number)
		{
			var imageData = new Image();
			imageData.src = 'http://140.115.80.235/~JSproject/'+number+'.png';
			
			imageData.onload = function() {			
				this.context.globalAlpha=0.1;   // Full opacity
				this.context.drawImage(imageData,0,0,this.canvas.width,this.canvas.height);		
			}.bind(this);
		
		},
		
		drawOriginImage: function(number)
		{
			
			var imageData = new Image();
			
			imageData.src = window.sourceImageData;
			
			
			imageData.onload = function() {				
				this.context.globalAlpha=1;   // Full opacity
				this.context.drawImage(imageData,0,0,this.canvas.width,this.canvas.height);		
				
				this.addCloudImage(number);
			}.bind(this);
		
			 
		},
		videoRecord: function(cameraControl)
		{
			navigator.mozCameras.getCamera(this.videoOptions, onAccessCamera);
		
			function onStreamReady( stream ) {
			  this.display.mozSrcObject = stream;
			  this.display.play();
			}

			function onAccessCamera( camera ) {
			  var size = camera.capabilities.previewSizes[0];

			  camera.getPreviewStream(size, onStreamReady);
			};
		}
	};

	exports.GetCloudImg = GetCloudImg;

  

})(window);