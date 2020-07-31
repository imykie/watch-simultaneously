const socketIO = require("socket.io");
const { onPlay, onPause, onSeek } = require("./actions");

function Socket(server) {
  const io = socketIO(server);

  io.on("connection", function (socket) {
    console.log("connected socket!");

    socket.on("greet", function (data) {
      console.log(data);
      socket.emit("respond", { hello: "Hey, Mr.Client!" });
    });

    onPlay(socket);
    onPause(socket);
    onSeek(socket);

    socket.on("disconnect", function () {
      console.log("Socket disconnected");
    });
  });

  return io;
}

module.exports = Socket;
