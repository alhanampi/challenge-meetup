import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import dbConnection from "./config/dbConfig.js";
import usersRouter from "./routes/userRoutes.js";
import meetupsRouter from "./routes/meetupsRoutes.js";

//configs
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
dbConnection();
app.use(express.json());
app.use(morgan("dev"));

//routes:

//test route:
app.get("/api", (req, res) => {
  res.send("test route");
});

//endpoints:
app.use("/api/users", usersRouter);
app.use("/api/meetups", meetupsRouter);

//app start
app.listen(PORT, () => {
  console.log(`Birras app running at http://localhost:${PORT}. Welcome!`);
});
