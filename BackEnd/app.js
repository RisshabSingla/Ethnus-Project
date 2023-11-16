require("dotenv").config();
require("express-async-errors");
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const podcastRoutes = require("./routes/podcast");
const playListRoutes = require("./routes/playLists");
const searchRoutes = require("./routes/search");
const morgan = require("morgan");
const app = express();

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// ROUTES
app.use(
  cors({
    origin: ["https://ethnus-project-backend.vercel.app"],
    method: ["POST", "GET"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/users/", userRoutes);
app.use("/api/login/", authRoutes);
app.use("/api/podcast/", podcastRoutes);
app.use("/api/playlists/", playListRoutes);
app.use("/api/", searchRoutes);

module.exports = app;
