// backend/index.js
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const helmet = require("helmet"); // istersen aç

// Route dosyaları
const authRoutes = require("./routes/auth");
const testRoutes = require("./routes/test");
const adminRoutes = require("./routes/admin");

const app = express();
app.disable("x-powered-by");
// app.use(helmet());
app.use(express.json());

// ---- CORS allowlist ----
const rawOrigins =
  process.env.CORS_ORIGINS ||
  "http://localhost:5173,http://localhost:3000,http://localhost:3001";
const allowSet = new Set(
  rawOrigins.split(",").map((s) => s.trim()).filter(Boolean)
);
const allowAll = rawOrigins.trim() === "*";

app.use(
  cors({
    origin(origin, cb) {
      if (!origin || allowAll || allowSet.has(origin)) return cb(null, true);
      return cb(null, false);
    },
    credentials: true,
  })
);

// ---- API Rotaları ----
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/admin", adminRoutes);

// ---- Health (DB ile) ----
app.get("/api/health", (_req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  const rs = mongoose.connection.readyState;
  res.status(200).json({ status: "ok", db: states[rs] ?? rs });
});

// ---- MongoDB bağlantısı ----
const PORT = Number(process.env.PORT) || 5000;
const MONGO_URI = process.env.MONGO_URI;

const serverStart = async () => {
  if (!MONGO_URI) {
    console.error("❌ MONGO_URI tanımlı değil.");
    process.exit(1);
  }
  try {
    await mongoose.connect(MONGO_URI);
    // Host’u güvenli logla (URI’yi değil)
    const host = (MONGO_URI.match(/@([^/?]+)/) || [])[1] || "<unknown-host>";
    console.log("✅ MongoDB bağlantısı başarılı →", host);

    const server = app.listen(PORT, () => {
      console.log(`🚀 Sunucu ${PORT} portunda çalışıyor`);
    });

    const shutdown = (sig) => () => {
      console.log(`\n${sig} alındı. Kapanıyor...`);
      server.close(() => {
        mongoose.connection.close(false, () => process.exit(0));
      });
      setTimeout(() => process.exit(1), 5000).unref();
    };

    process.on("SIGINT", shutdown("SIGINT"));
    process.on("SIGTERM", shutdown("SIGTERM"));
    process.on("unhandledRejection", (e) =>
      console.error("unhandledRejection:", e)
    );
  } catch (err) {
    console.error("❌ MongoDB bağlantı hatası:", err.message);
    process.exit(1);
  }
};

serverStart();
