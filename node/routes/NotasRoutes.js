import express from "express"
import { getAllNotas, getNotas, createNotas, updateNotas, deleteNotas } from "../controllers/NotasController.js"

const router = express.Router()

router.get("/", getAllNotas);
router.get("/:id", getNotas);
router.post("/", createNotas);
router.put("/:id", updateNotas);
router.delete("/:id", deleteNotas);

export default router

