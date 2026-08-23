import { Router } from "express";
import vehicleRoutes from "../modules/vehicles/vehicle.routes";

const router = Router();

// mount vehicle routes
router.use("/vehicles", vehicleRoutes);

export default router;