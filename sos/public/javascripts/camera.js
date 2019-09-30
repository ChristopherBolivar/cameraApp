function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {type:mimeString});
}

                    // Set constraints for the video stream
          var dataURL;  
          var blob;  
                
          var constraints = { video: { facingMode: "user" }, audio: false };// Define constants
          const cameraButton = document.querySelector('#triggerCam')
          const cameraView = document.querySelector("#camera--view"),
              cameraOutput = document.querySelector("#camera--output"),
              cameraSensor = document.querySelector("#camera--sensor"),
              cameraTrigger = document.querySelector("#camera--trigger")// Access the device camera and stream to cameraView
              cameraButton.onclick = function() {
              navigator.mediaDevices
                  .getUserMedia(constraints)
                  .then(function(stream) {
                  track = stream.getTracks()[0];
                  cameraView.srcObject = stream;
              })
              .catch(function(error) {
                  console.error("Oops. Something is broken.", error);
              });
          }// Take a picture when cameraTrigger is tapped
          cameraTrigger.onclick = function() {
              cameraSensor.width = cameraView.videoWidth;
              cameraSensor.height = cameraView.videoHeight;
              cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
              cameraOutput.src = cameraSensor.toDataURL("image/webp");
              cameraOutput.classList.add("taken");
              dataURL = cameraSensor.toDataURL('image/png');
              blob = dataURItoBlob(dataURL);
              var url = URL.createObjectURL(blob)
              console.log(dataURL)
              console.log(blob)
              
              setTimeout(() => {
              axios.post(`http://localhost:3000/submit`, {thisBlob: blob})
              .then(a =>{
                console.log('Succes')
            }, 1000).catch(err => console.log(err))
})
           };