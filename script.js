const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video and play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (e) {
    // catch errors
    console.error("Error Here!", e);
  }
}

// event listener for button
button.addEventListener('click', async () => {
  // disable button
  button.disabled = true;

  // start pic-in-pic
  await videoElement.requestPictureInPicture();

  // reset button
  button.disabled = false;
});

// on load
selectMediaStream();