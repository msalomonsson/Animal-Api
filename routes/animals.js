import express from "express";
import {
  getAnimals,
  getAnimal,
  addAnimalFact,
  deleteAnimalFact,
} from "../controllers/animals.js";

const router = express.Router();

router.get("/", getAnimals);

router.get("/:animal", getAnimal);

router.post("/:animal", addAnimalFact);

router.delete("/:animal/:id", deleteAnimalFact);

export default router;
