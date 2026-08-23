import { Vehicle } from "@/components/browse/vehicleData";
import VehicleCard from "@/components/browse/VehicleCard";

type VehicleGridProps = {
  vehicles: Vehicle[];
  rentalType?: string;
};

export default function VehicleGrid({
  vehicles,
  rentalType = "hourly",
}: VehicleGridProps) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          name={vehicle.name}
          image={vehicle.image}
          rating={vehicle.rating}
          distance={vehicle.distance}
          pricePerHour={vehicle.pricePerHour}
          pricePerDay={vehicle.pricePerDay}
          fuel={vehicle.fuel}
          transmission={vehicle.transmission}
          verified={vehicle.verified}
          rentalType={rentalType === "daily" ? "daily" : "hourly"}
        />
      ))}
    </div>
  );
}