// const log = require("./logger");

// console.log(logger);
// log("Meo");

//jshint

// const path = require("path");

// var pathObj = path.parse(__filename);

// console.log("pathObj", pathObj);

// const os = require("os");

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log("totalMemory", totalMemory);
// console.log(`freeMemory: ${freeMemory}`);

// const fs = require("fs");

// const files = fs.readdirSync("./");
// console.log("files", files);

// fs.readdir("./", function (err, files) {
//   if (err) console.log("Err", err);
//   else console.log("Result", files);
// });

// fs.readdir("$", function (err, files) {
//   if (err) console.log("Err", err);
//   else console.log("Result", files);
// }); //====> Error

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// const Logger = require("./logger");
// const logger = new Logger();

// //Register a listener
// logger.on("messageLogged", (e) => {
//   console.log("listenerCalled");
//   console.log("e", e);
// });

// //Raise an event
// // emitter.emit("messageLogged", { id: 1, url: "https://" });

// logger.log("Message");

const http = require("http");

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// server.on("connection", (socket) => {
//   console.log("New Connection...");
// });

server.listen(3000);

console.log("Listening on port 3000...");
