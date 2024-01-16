const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = 9090;
const router = require("./routes/routes");

app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello welcome to ClassUnity API");
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
