const express = require("express");
const morgan = require("morgan");
const app = express();

const profileRoutes = require("./routes/profile");

// load config
require("dotenv").config({ path: "./config.env" });

// dev logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/profile", profileRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public"));

  // handle SPA
  app.get(/.*/, (req, res) => {
    res.sendfile(__dirname + "/public/index.html");
  });
}

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`server running in ${process.env.NODE_ENV} on port ${port}`);
});
