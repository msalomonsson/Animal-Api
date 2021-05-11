import express from "express";
import animalRoutes from "./routes/animals.js";

const app = express();
const port = 3030;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Animal facts API");
});

app.use("/animals", animalRoutes);

app.get("*", (req, res) => {
  res.send("Error: Nothing here");
});

const server = app.listen(port, () => {
  console.log(`Local app listening at http://localhost:${port}`);
});
