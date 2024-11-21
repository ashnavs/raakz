// import express, { Request, Response } from "express";
// import cors from "cors";
// import axios from "axios";
// import dotenv from 'dotenv'

// // Load environment variables
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Getty Images API Configuration
// const GETTY_API_BASE_URL = "https://api.gettyimages.com/v3";
// const GETTY_API_KEY = process.env.GETTY_API_KEY;

// // Proxy Route for Countries
// app.get("/countries", async (req: Request, res: Response) => {
//   try {
//     const response = await axios.get(`${GETTY_API_BASE_URL}/countries`, {
//       headers: {
//         "Api-Key": GETTY_API_KEY || "",
//       },
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching countries:", error);
//     res.status(500).json({ message: "Error fetching countries" });
//   }
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
