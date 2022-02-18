import express from "express";

import api from "./routes/api";
import cors from "cors";
const app = express();

const allowedOrigins = [
  "http://localhost:3000",

];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

app.use(cors(options));
app.use("/api", api);

app.get("/health-check", (req, res) => {
  res.send("Health check endpoint provided by your fibonacci app");
});

app.get("/", (req, res) => {
  res.send("Welcome to your fibonacci app");
});

const port = process.env.port || 7777;

app.listen(port, () => console.log(`Fibonacci app is running ${port}`));
