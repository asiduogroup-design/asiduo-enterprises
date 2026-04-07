import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import contactRouter from "./routes/contact.js";
import authRouter from "./routes/auth.js";
import enquiriesRouter from "./routes/enquiries.js";
import projectsRouter from "./routes/projects.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/contact", contactRouter);
app.use("/api/auth", authRouter);
app.use("/api/enquiries", enquiriesRouter);
app.use("/api/projects", projectsRouter);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || "Server error",
  });
});

const basePort = Number(process.env.PORT) || 5000;
const maxPortAttempts = 10;

const startServer = (port, attempts = 0) => {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE" && attempts < maxPortAttempts - 1) {
      const nextPort = port + 1;
      console.warn(`Port ${port} is in use. Retrying on ${nextPort}...`);
      startServer(nextPort, attempts + 1);
      return;
    }

    console.error("Server failed to start:", err.message);
    process.exit(1);
  });
};

connectDb()
  .then(() => {
    startServer(basePort);
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  });
