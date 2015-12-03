'use strict';

(function(exports) {
	var StorePicture = function() {
		this.canvas=document.getElementById('img1');
		this.context = this.canvas.getContext('2d');
		
		this.storeButton=document.getElementById('storeButton');
		
		this.storage = navigator.getDeviceStorage('pictures');
		
	};

	StorePicture.prototype = {
		start: function()
		{
					

			
			this.storeButton.addEventListener('click', function(event) {
				this.store();
							
			}.bind(this));
		},
		store: function()
		{
			this.canvas.toBlob(function(blob) {
			  var newImg = document.createElement("img"),
				  url = URL.createObjectURL(blob);

			  newImg.onload = function() {
				//not successful now!!
				alert("Àx¦s¦¨¥\!");
				// no longer need to read the blob so it's revoked
				URL.revokeObjectURL(url);
			  };

			  newImg.src = url;
			  document.body.appendChild(newImg);
			});
		
		
		}
		
	};

	exports.StorePicture = StorePicture;

  

})(window);