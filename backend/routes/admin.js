const express = require("express");
const router = express.Router();
const User = require("../models/User");
const verifyToken = require("../middleware/verifyToken");
const authorizeRoles = require("../middleware/authorizeRoles");

// 🔒 Sadece admin kontrolü
const isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Bu alana sadece admin erişebilir." });
  }
  next();
};

// 🔍 Tüm kullanıcıları getir (sadece admin)
router.get("/users", verifyToken, isAdmin, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Kullanıcılar alınamadı", error });
  }
});

// 🔍 Rol filtresi ile kullanıcıları getir (sadece admin)
router.get("/users-by-role", verifyToken, isAdmin, async (req, res) => {
  try {
    const role = req.query.role;
    if (!role) {
      return res.status(400).json({ message: "Rol parametresi gereklidir." });
    }
    const users = await User.find({ role }).select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Filtreli kullanıcılar alınamadı", error });
  }
});

// 🔍 Belirli kullanıcıyı getir (sadece admin)
router.get("/users/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Kullanıcı alınamadı", error });
  }
});

// 🔁 Kullanıcının rolünü güncelle (sadece admin)
router.put("/users/:id/role", verifyToken, isAdmin, async (req, res) => {
  try {
    const { role } = req.body;
    if (!role) {
      return res.status(400).json({ message: "Rol bilgisi gereklidir." });
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı." });
    }

    res.status(200).json({
      message: "Kullanıcının rolü başarıyla güncellendi.",
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({ message: "Rol güncelleme hatası", error });
  }
});

// 📝 Kullanıcıyı güncelle (sadece admin)
router.put("/users/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }).select("-password");
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Güncelleme başarısız", error });
  }
});

// ❌ Kullanıcıyı sil (sadece admin)
router.delete("/users/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Kullanıcı başarıyla silindi!" });
  } catch (error) {
    res.status(500).json({ message: "Silme işlemi başarısız", error });
  }
});

module.exports = router;
