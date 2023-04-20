var createServer = require("http").createServer;
var trace = require("jstrace");

createServer(function (req, res) {
  trace("request:start", { url: req.url });

  res.setHeader("content-type", "application/json");

  if (req.url === "/prognosis" && req.method === "GET") {
    statusCode = 200;
    body = { ok: true };
  } else {
    statusCode = 404;
    body = { error: "notfound" };
  }

  res.writeHead(statusCode);
  res.end(JSON.stringify(body));

  trace("request:end", { statusCode, body: body });
}).listen(9999, function () {
  console.error("up");
});
