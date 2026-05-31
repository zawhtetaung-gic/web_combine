const express = require("express");
const path = require("path");
const projects = require("../config");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname)));
app.use("/images", express.static(path.join(__dirname, "..", "images")));

app.get("/api/projects", (req, res) => {
  res.json(projects);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`🌐 Hub running at http://localhost:${PORT}`);
});
