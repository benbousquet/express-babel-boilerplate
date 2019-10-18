import express from "express";
import router from "./routes";
const app = express();

app.get("/", (req, res) => {
  res.send("hello there!");
});

app.use("/books", router);

app.listen(3000, () => console.log("app started on port 3000"));
