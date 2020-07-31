function onPlay(socket) {
  socket.on("onPlay", function (data) {
    console.log(data);
    socket.emit("hasPlayed", { success: true, message: "playing" });
  });
}

function onPause(socket) {
  socket.on("onPause", function (data) {
    console.log(data);
    socket.emit("hasPaused", { success: true, message: "paused" });
  });
}

function onSeek(socket) {
  socket.on("onSeek", function (data) {
    console.log(data);
    socket.emit("hasSeek", { success: true, message: "found" });
  });
}

function onPrev(socket) {
  socket.on("onPrev", function (data) {
    console.log(data);
    socket.emit("hasPrev", { success: true, message: "prev" });
  });
}

function onNext(socket) {
  socket.on("onNext", function (data) {
    console.log(data);
    socket.emit("hasNext", { success: true, message: "next" });
  });
}

module.exports = { onPlay, onPause, onSeek, onPrev, onNext };
