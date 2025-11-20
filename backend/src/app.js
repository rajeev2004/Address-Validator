import express from "express";
import cors from "cors";
import addressRouter from "./routes/address.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/address", addressRouter);

export default app;
