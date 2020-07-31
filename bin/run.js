const app = require("../app");
const useSocket = require("../controllers/socket");
const statusMonitor = require("express-status-monitor");
const debug = require("debug")(" :server");
const http = require("http");
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

// connect socket io
const server = http.createServer(app);
const io = useSocket(server);
// const io = require("socket.io")(server);

// set express status monitor
app.use(
  statusMonitor({
    websocket: io,
    path: "/status",
    socketPath: "/socket.io",
    healthChecks: [
      {
        protocol: "http",
        host: "localhost",
        path: "/",
        port: "3000"
      }
    ],
    port: app.get("port")
  })
);

// access status monitor on /status route
app.get("/status", statusMonitor().pageRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
  console.log({
    message: err.message,
    error: err
  });
});

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
  console.log("Listening on " + bind);
}
