const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [
        "admin",       // Tam yetkili
        "manager",     // Yönetici
        "sales",       // Satış danışmanı
        "editor",      // İçerik yöneticisi
        "user",        // Normal kullanıcı
        "guest",       // Giriş yapmamış kullanıcı gibi davranır
        "finance",     // Mali işler
        "asker"        // Asker (özel rol, belki yetkili güvenlik gibi)
      ],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
