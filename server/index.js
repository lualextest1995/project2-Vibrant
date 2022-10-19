const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/auth");
const courseRoute = require("./routes/course");
const passport = require("passport");
require("./config/passport")(passport);

//Connect MongoDb Atlas
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("Connect to mongoDB Atlas.");
  })
  .catch((err) => {
    console.log("Connection Failed.");
    console.log(err);
  });

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", authRoute);
app.use(
  "/api/courses",
  passport.authenticate("jwt", { session: false }),
  courseRoute
);

app.listen(8080, () => {
  console.log("Server running on port 8080.");
});
