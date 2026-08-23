import app from "./app";
import { env } from "./config/env";
import { connectDB } from "./config/db";

const PORT = env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(); // ✅ WAIT for DB

    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();