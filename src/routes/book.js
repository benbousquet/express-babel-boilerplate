import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("this is where the books are");
});

export default router;
