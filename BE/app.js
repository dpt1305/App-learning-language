const express = require("express");
const app = express();
const PORT = 5005;

app.get("/", (req, res) => res.send("helloo"));

app.listen(process.env.PORT || PORT, () => console.log(`connect ${PORT}`));
