//  This code loads the IFrame Player API code asynchronously.

const progressBar = $(".progressbar");
const progressBarWidth = document.querySelector(".progressbar").clientWidth;
const progressBox = $(".progress-box");
const play = $("#play");
const pause = $("#pause");

let goPosition;
let player;

const tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  player = new YT.Player("ytplayer", {
    height: "390",
    width: "640",
    videoId: "M7lc1UVf-VE", //'7ghhRHRP6t4',
    playerVars: {
      autoplay: 1,
      controls: 0,
      showInfo: 0,
      disablekb: 1,
      modestbranding: 1
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  setInterval(() => {
    let videoState = (player.getCurrentTime() / player.getDuration()) * 100;
    let destination = (videoState / 100) * progressBarWidth - 10;
    progressBox.css("margin-left", destination);
  }, 200);
}

// The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
let done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 10000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}

progressBar.click(function (event) {
  const divOffset = $(this).offset();
  let currentPosition = event.clientX - divOffset.left;
  videoState = Number(((currentPosition / progressBarWidth) * 100).toFixed(2));
  destination = (videoState / 100) * progressBarWidth - 10;
  currentState = Math.round((videoState / 100) * player.getDuration());
  player.seekTo(currentState, true);
  progressBox.css("margin-left", destination);
  console.log(
    divOffset,
    currentPosition,
    videoState,
    destination,
    currentState
  );
});

play.click(function () {
  player.playVideo();
});

pause.click(function () {
  player.pauseVideo();
});
