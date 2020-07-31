const slider = document.getElementById("slider");

slider.oninput = function () {
  console.log(this.value);
  $(".count")
    .text(this.value)
    .css({
      left: this.value + "%",
      transform: "translateX(-" + this.value + "%)"
    });
  $(".fill").css("width", this.value + "%");
};
