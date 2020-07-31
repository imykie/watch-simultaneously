var socket = io('http://localhost:3000', {transports: ['websocket']});

socket.on('connect', function () {
  console.log('connected!');
  socket.emit('greet', { message: 'Hello Mr.Server!' });
});

socket.on('respond', function (data) {
  console.log(data);
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
    console.log("disconnect")
});