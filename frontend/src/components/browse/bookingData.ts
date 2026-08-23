export type Booking = {
  id: string;
  vehicleId: string;

  rentalType: "hourly" | "daily";

  // Hourly booking
  date?: string;
  startTime?: string;
  endTime?: string;

  // Daily booking
  pickupDate?: string;
  returnDate?: string;
};

export const bookings: Booking[] = [
  {
    id: "booking-1",
    vehicleId: "4",
    rentalType: "hourly",
    date: "2026-08-25",
    startTime: "10:00",
    endTime: "14:00",
  },

  {
    id: "booking-2",
    vehicleId: "2",
    rentalType: "hourly",
    date: "2026-08-25",
    startTime: "15:00",
    endTime: "18:00",
  },

  {
    id: "booking-3",
    vehicleId: "8",
    rentalType: "daily",
    pickupDate: "2026-08-26",
    returnDate: "2026-08-28",
  },

  {
    id: "booking-4",
    vehicleId: "6",
    rentalType: "daily",
    pickupDate: "2026-08-27",
    returnDate: "2026-08-29",
  },
];