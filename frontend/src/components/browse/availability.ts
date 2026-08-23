import type { Booking } from "./bookingData";

type AvailabilityParams = {
  vehicleId: string;
  rentalType: "hourly" | "daily";

  date?: string;
  startTime?: string;
  endTime?: string;

  pickupDate?: string;
  returnDate?: string;
};

function hourlyTimesOverlap(
  requestedStart: string,
  requestedEnd: string,
  bookingStart: string,
  bookingEnd: string
): boolean {
  return (
    requestedStart < bookingEnd &&
    requestedEnd > bookingStart
  );
}

function dailyDatesOverlap(
  requestedStart: string,
  requestedEnd: string,
  bookingStart: string,
  bookingEnd: string
): boolean {
  return (
    requestedStart < bookingEnd &&
    requestedEnd > bookingStart
  );
}

export function isVehicleAvailable(
  bookings: Booking[],
  params: AvailabilityParams
): boolean {
  const vehicleBookings = bookings.filter(
    (booking) =>
      booking.vehicleId === params.vehicleId &&
      booking.rentalType === params.rentalType
  );

  if (vehicleBookings.length === 0) {
    return true;
  }

  if (params.rentalType === "hourly") {
    if (
      !params.date ||
      !params.startTime ||
      !params.endTime
    ) {
      return true;
    }

    const hasConflict = vehicleBookings.some(
      (booking) => {
        if (
          booking.date !== params.date ||
          !booking.startTime ||
          !booking.endTime
        ) {
          return false;
        }

        return hourlyTimesOverlap(
          params.startTime!,
          params.endTime!,
          booking.startTime,
          booking.endTime
        );
      }
    );

    return !hasConflict;
  }

  if (
    !params.pickupDate ||
    !params.returnDate
  ) {
    return true;
  }

  const hasConflict = vehicleBookings.some(
    (booking) => {
      if (
        !booking.pickupDate ||
        !booking.returnDate
      ) {
        return false;
      }

      return dailyDatesOverlap(
        params.pickupDate!,
        params.returnDate!,
        booking.pickupDate,
        booking.returnDate
      );
    }
  );

  return !hasConflict;
}