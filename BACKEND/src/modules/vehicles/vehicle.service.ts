import { Vehicle, IVehicle } from "./vehicle.model";

export const createVehicle = async (data: Partial<IVehicle>) => {
  try {
    const vehicle = await Vehicle.create(data);
    return vehicle;
  }catch (error: any) {
  console.error("🔥 REAL ERROR:", error);
  throw error;
}
};
// ✅ ADD THIS
export const getAllVehicles = async () => {
  const vehicles = await Vehicle.find();
  return vehicles;
};