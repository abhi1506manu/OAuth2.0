import express from "express";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import mongoose from "mongoose";
import ejs from "ejs"
import authRoutes from "./routes/authRoutes.js"
import "./config/passport.js"
import path from "path"

dotenv.config();
const __dirname = path.resolve();
const app = express();


app.set("view engine","ejs")
app.set('views', path.join(__dirname, 'views'));

mongoose
  .connect(process.env.Mongo_Url)
  .then(() => console.log("Database connected!!"))
  .catch((err) => console.log(`Error while connecting to database ${err}`));

app.use(
  session({
    secret: process.env.CLIENT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/",authRoutes);


// Start the server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
