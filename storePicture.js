'use strict';

(function(exports) {
	var StorePicture = function() {
		this.canvas=document.getElementById('img1');
		this.context = this.canvas.getContext('2d');
		
		this.storeButton=document.getElementById('storeButton');
		
		//this.storage = navigator.getDeviceStorage('pictures');
		
	};

	StorePicture.prototype = {
		start: function()
		{
					

			
			this.storeButton.addEventListener('click', function(event) {
				//alert("儲存成功!");
				this.store();
							
			}.bind(this));
		},
		store: function()
		{
			this.canvas.toBlob(function(blob) {
				var sdcard = navigator.getDeviceStorage("pictures");
				var file   = new Blob(["This is a text file."], {type: "text/plain"});
				var request = sdcard.addNamed(blob, "my-file"+new Date().getTime()+".png");
				request.onsuccess = function () {
				  alert("儲存成功haha!");  
				}
				request.onerror = function () {
				  console.log('Unable to write the file: ' + this.error);
			  };
			});
		
		
		}
		
	};

	exports.StorePicture = StorePicture;

  

})(window);