// (function (exports, require, module, __filename, __dirname) {
console.log(__filename, __dirname);
var url = "https://mylogger.io/log";

const EventEmitter = require("events");
// const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    //Raise an event
    // emitter.emit("messageLogged", { id: 1, url: "https://" });
    this.emit("messageLogged", { id: 1, url: "https://" });
  }
}

module.exports = Logger;
//   exports.log = log;
// });
