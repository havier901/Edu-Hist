const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write(
      "<body><div><h1>Welcome to my assignment.</h1><div><form action='/create-user' method='POST'><input type='text' name='user'><button type='submit'>Create User</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      res.setHeader('Content-Type', 'text/html');
      res.write("<html>");
      res.write("<head><title>Users</title></head>");
      res.write(
        `<body><ul><li>${user}</li><li>User 2</li><li>User 3</li></ul></body>`
      );
      res.write("</html>");
    });
  }
};

exports.handler = requestHandler;
