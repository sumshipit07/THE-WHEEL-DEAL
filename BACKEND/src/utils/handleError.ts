import { Response } from "express";

export const handleError = (res: Response, error: any) => {
  console.error(error);

  return res.status(500).json({
    success: false,
    message: error.message || "Something went wrong",
  });
};