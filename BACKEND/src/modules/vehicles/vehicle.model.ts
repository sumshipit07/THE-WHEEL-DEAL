import mongoose, { Schema } from "mongoose";

export interface IVehicle {
  ownerId: mongoose.Types.ObjectId;

  title: string;
  description?: string;

  vehicleType: "bike" | "scooty" | "car";

  brand?: string;
  model?: string;
  year?: number;

  fuelType?: "petrol" | "diesel" | "electric";
  transmission?: "manual" | "automatic";

  pricePerHour: number;
  securityDeposit?: number;

  location: {
    latitude: number;
    longitude: number;
    address?: string;
  };

  images?: string[];

  isAvailable: boolean;
  isVerified: boolean;

  createdAt: Date;
  updatedAt: Date;
}

const vehicleSchema = new Schema<IVehicle>(
  {
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: { type: String, required: true },
    description: { type: String },

    vehicleType: {
      type: String,
      enum: ["bike", "scooty", "car"],
      required: true,
    },

    brand: { type: String },
    model: { type: String },
    year: { type: Number },

    fuelType: {
      type: String,
      enum: ["petrol", "diesel", "electric"],
    },

    transmission: {
      type: String,
      enum: ["manual", "automatic"],
    },

    pricePerHour: { type: Number, required: true },
    securityDeposit: { type: Number, default: 0 },

    location: {
      latitude: { type: Number, required: true },
      longitude: { type: Number, required: true },
      address: { type: String },
    },

    images: [{ type: String }],

    isAvailable: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Vehicle = mongoose.model<IVehicle>("Vehicle", vehicleSchema);