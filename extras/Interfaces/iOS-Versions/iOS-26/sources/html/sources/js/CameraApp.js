var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

function takePicture() {
    let canvas = document.createElement('canvas');

	canvas.height = window.getComputedStyle(document.body).height.replace('px', '');
	canvas.width = window.getComputedStyle(document.body).width.replace('px', '');
	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);;
    let image_data_url = canvas.toDataURL('image/jpeg');

    // data url of the image
    console.log(image_data_url);
}