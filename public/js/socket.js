socket.on("connect", function () {
  console.log("connected!");
  socket.emit("greet", { message: "Hello Mr.Server!" });
});

socket.on("respond", function (data) {
  console.log(data);
});

socket.on("event", resp => {
  if (resp.action === "play") {
    console.log(resp);
    player.playVideo();
    if (Math.abs(player.getCurrentTime() - resp.time) > 1) {
      player.seekTo(resp.time);
    }
    pause.css("display", "block");
    play.css("display", "none");
  } else if (resp.action === "pause") {
    console.log(resp);
    player.pauseVideo();
    if (Math.abs(player.getCurrentTime() - resp.time) > 1) {
      player.seekTo(resp.time);
    }
    play.css("display", "block");
    pause.css("display", "none");
  } else if (resp.action === "seek") {
    console.log(resp);
    player.playVideo();
    player.seekTo(resp.time);
  }
});

// const socket = io('http://localhost:3000', {
//     reconnectionDelay: 1000,
//     reconnection: true,
//     reconnectionAttemps: 10,
//     transports: ['websocket'],
//     agent: false,
//     upgrade: false,
//     rejectUnauthorized: false
// });

socket.on("disconnect", () => {
  console.log("disconnect");
});
