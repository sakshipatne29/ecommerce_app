// server/index.js

const express = require("express");

const app = express();

const PORT = 3001;

app.get("/api/users", (req, res) => {
  res.send( "index file");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

