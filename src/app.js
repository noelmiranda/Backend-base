const express = require("express");
const cors = require("cors");
const app = express();
const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");
 //settings
app.set("port", process.env.PORT || 3001)

 // middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);

module.exports = app;

