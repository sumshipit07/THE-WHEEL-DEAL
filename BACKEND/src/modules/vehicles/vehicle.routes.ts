import { Router } from "express";
import {
  createVehicleController,
  getAllVehiclesController,
} from "./vehicle.controller";

const router = Router();

// POST /vehicles
router.post("/", createVehicleController);

// GET /vehicles
router.get("/", getAllVehiclesController);

export default router;