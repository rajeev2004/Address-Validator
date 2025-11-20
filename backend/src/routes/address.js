import express from "express";
import { validateAddress } from "../controllers/addressController.js";

const router = express.Router();

router.post("/validate", validateAddress);

export default router;
