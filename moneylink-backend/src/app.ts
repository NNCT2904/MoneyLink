import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import appRouter from "./Routes";
import mongoConnect from "./mongoConnect";

dotenv.config();

const PORT = 3001;

const app = express();

app.use(cors());
app.use("/api", appRouter);

// Connect to MongoDB
mongoConnect(process.env.MONGODB_URI);

app.listen(PORT, () => {
  console.log(`Backend listening at http://localhost:${PORT}`);
});

export default app;
