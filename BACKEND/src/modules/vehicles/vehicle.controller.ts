import { Request, Response } from "express";
import { createVehicle, getAllVehicles } from "./vehicle.service";
import { handleError } from "../../utils/handleError";

// CREATE VEHICLE
export const createVehicleController = async (req: Request, res: Response) => {
  try {
    const { title, vehicleType, pricePerHour, location } = req.body || {};

    if (!title || !vehicleType || !pricePerHour || !location) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (pricePerHour <= 0) {
      return res.status(400).json({
        success: false,
        message: "Price must be greater than 0",
      });
    }

    const vehicle = await createVehicle({
      ...req.body,
      ownerId: "64f000000000000000000000",
    });

    res.status(201).json({
      success: true,
      data: vehicle,
    });

  } catch (error) {
    return handleError(res, error);
  }
};

// GET ALL VEHICLES
export const getAllVehiclesController = async (
  req: Request,
  res: Response
) => {
  try {
    const vehicles = await getAllVehicles();

    res.status(200).json({
      success: true,
      data: vehicles,
    });
  } catch (error: any) {
    console.error("GET VEHICLES ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

