const slider = document.getElementById("slider");
const volumeUp = $("#volume-up");
const volumeDown = $("#volume-down");
const volumeOff = $("#volume-off");

slider.oninput = function () {
  let volume = this.value;
  if (volume > 50) {
    volumeOff.css("display", "none");
    volumeDown.css("display", "none");
    volumeUp.css("display", "block");
  } else if (volume > 0 && volume <= 50) {
    volumeUp.css("display", "none");
    volumeOff.css("display", "none");
    volumeDown.css("display", "block");
  } else {
    volumeUp.css("display", "none");
    volumeDown.css("display", "none");
    volumeOff.css("display", "block");
  }
  player.setVolume(volume);
  $(".count")
    .text(volume)
    .css({
      left: volume + "%",
      transform: "translateX(-" + volume + "%)"
    });
  $(".fill").css("width", volume + "%");
};
