import express from "express";
const router = express.Router();
import { fibonacciGenerator } from "../helpers/fibonacciGenerator";

router.get("/fibonacci/:number", (req, res) => {
  const number = req.params.number;
  if (number != null && number != "" && !isNaN(Number(number.toString()))) {
    const value = fibonacciGenerator(Number(number.toString()));
    res.json({ fibonacci: value });
  } else {
    res.send("this is not a number");
  }
});

export default router;
