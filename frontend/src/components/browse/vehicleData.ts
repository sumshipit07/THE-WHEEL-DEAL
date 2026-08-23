export type Vehicle = {
  id: string;
  name: string;
  image: string;
  rating: number;
  distance: number;
  pricePerHour: number;
  pricePerDay: number;
  vehicleType: "scooter" | "bike" | "car";
  fuel: string;
  transmission: string;
  availableNow: boolean;
  verified: boolean;
  createdAt: string;
};

export const vehicles: Vehicle[] = [
  {
    id: "1",
    name: "Author 450X",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39",
    rating: 4.8,
    distance: 2.4,
    pricePerHour: 120,
    pricePerDay: 850,
    vehicleType: "scooter",
    fuel: "Electric",
    transmission: "Automatic",
    availableNow: true,
    verified: true,
    createdAt: "2026-08-18",
  },
  {
    id: "2",
    name: "Royal Enfield Hunter 350",
    image: "https://images.unsplash.com/photo-1558981359-219d6364c9c8",
    rating: 4.8,
    distance: 3.1,
    pricePerHour: 180,
    pricePerDay: 1200,
    vehicleType: "bike",
    fuel: "Petrol",
    transmission: "Manual",
    availableNow: true,
    verified: true,
    createdAt: "2026-08-08"
  },
  {
    id: "3",
    name: "TVS Jupiter 125",
    image: "https://images.unsplash.com/photo-1525160354320-d8e92641c563",
    rating: 5.4,
    distance: 1.7,
    pricePerHour: 100,
    pricePerDay: 700,
    vehicleType: "scooter",
    fuel: "Petrol",
    transmission: "Automatic",
    availableNow: true,
    verified: true,
    createdAt: "2026-08-12"
  },
  {
    id: "4",
    name: "Honda Activa 6G",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65",
    rating: 4.7,
    distance: 2.1,
    pricePerHour: 110,
    pricePerDay: 750,
    vehicleType: "scooter",
    fuel: "Petrol",
    transmission: "Automatic",
    availableNow: false,
    verified: true,
    createdAt: "2026-08-10"
  },
  {
    id: "5",
    name: "Honda Shine",
    image: "https://images.unsplash.com/photo-1558980394-0c2e8b6c9e44",
    rating: 4.6,
    distance: 4.2,
    pricePerHour: 120,
    pricePerDay: 800,
    vehicleType: "bike",
    fuel: "Petrol",
    transmission: "Manual",
    availableNow: true,
    verified: false,
    createdAt: "2026-08-02"
  },
  {
    id: "6",
    name: "Bajaj Pulsar NS200",
    image: "https://images.unsplash.com/photo-1558980664-10ea1a4b4a5b",
    rating: 4.5,
    distance: 3.6,
    pricePerHour: 150,
    pricePerDay: 1000,
    vehicleType: "bike",
    fuel: "Petrol",
    transmission: "Manual",
    availableNow: false,
    verified: true,
    createdAt: "2026-08-15"
  },
  {
    id: "7",
    name: "Yamaha MT-15",
    image: "https://images.unsplash.com/photo-1558981001-5864b3250a5a",
    rating: 4.8,
    distance: 4.8,
    pricePerHour: 160,
    pricePerDay: 1100,
    vehicleType: "bike",
    fuel: "Petrol",
    transmission: "Manual",
    availableNow: true,
    verified: true,
    createdAt: "2026-08-09"
  },
  {
    id: "8",
    name: "Hyundai i20",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
    rating: 4.7,
    distance: 4.5,
    pricePerHour: 450,
    pricePerDay: 2800,
    vehicleType: "car",
    fuel: "Petrol",
    transmission: "Manual",
    availableNow: true,
    verified: true,
    createdAt: "2026-08-12"
  },
];