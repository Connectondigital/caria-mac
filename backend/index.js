require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Route dosyaları
const authRoutes = require("./routes/auth");
const testRoutes = require("./routes/test");
const adminRoutes = require("./routes/admin");

const app = express();

// 🔍 Çevre değişkeni kontrol
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("PORT:", process.env.PORT);

// Middleware
app.use(express.json());
app.use(cors());

// API Rotaları
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/admin", adminRoutes);

// MongoDB bağlantısı
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB bağlantısı başarılı");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Sunucu ${process.env.PORT} portunda çalışıyor`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB bağlantı hatası:", err.message);
  });
