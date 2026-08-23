"use client";

import { useState } from "react";

import BrowseHeader from "./BrowseHeader";
import BrowseSearch from "./BrowseSearch";
import BrowseResults from "./BrowseResults";

type BrowsePageContentProps = {
    location?: string;
    vehicleType?: string;
    rentalType?: "hourly" | "daily";

    date?: string;
    startTime?: string;
    endTime?: string;

    pickupDate?: string;
    returnDate?: string;
};

export default function BrowsePageContent({
    location,
    vehicleType: initialVehicleType,
    rentalType = "hourly",
    date,
    startTime,
    endTime,
    pickupDate,
    returnDate,
}: BrowsePageContentProps) {
    const [radius, setRadius] = useState(5);

    const [vehicleType, setVehicleType] = useState(
        initialVehicleType || "all"
    );

    return (
        <>
            <BrowseHeader
                location={location}
                radius={radius}
            />

            <BrowseSearch
                initialLocation={location}
                vehicleType={vehicleType}
                onVehicleTypeChange={setVehicleType}
            />

            <BrowseResults
                rentalType={rentalType}
                vehicleType={vehicleType}
                onVehicleTypeChange={setVehicleType}
                radius={radius}
                onRadiusChange={setRadius}
                date={date}
                startTime={startTime}
                endTime={endTime}
                pickupDate={pickupDate}
                returnDate={returnDate}
            />
        </>
    );
}