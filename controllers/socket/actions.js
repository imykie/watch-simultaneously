function onAction(io, socket) {
  socket.on("event", function (data) {
    console.log(data);
    io.emit("event", {
      success: true,
      action: data.action,
      time: data.time
    });
  });
}

// function onPause(socket) {
//   socket.on("onPause", function (data) {
//     console.log(data);
//     socket.emit("event", { success: true, action: "pause", time: data.time });
//   });
// }

// function onSeek(socket) {
//   socket.on("onSeek", function (data) {
//     console.log(data);
//     socket.emit("event", { success: true, action: "seek", time: data.time });
//   });
// }

// function onPrev(socket) {
//   socket.on("onPrev", function (data) {
//     console.log(data);
//     socket.emit("event", { success: true, action: "prev" });
//   });
// }

// function onNext(socket) {
//   socket.on("onNext", function (data) {
//     console.log(data);
//     socket.emit("event", { success: true, action: "next" });
//   });
// }

module.exports = { onAction };
