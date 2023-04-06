var fs = require("fs");

var peach = function (obj) {
  console.dir(obj);
};

var browser = function (callback) {
  fs.readFile(process.argv[2], { encoding: "utf8" }, callback);
};

var koopa = function (error, file) {
  debugger;
  // handle error by printing something to stderr
  peach(JSON.stringify(file));
};

browser(koopa);
