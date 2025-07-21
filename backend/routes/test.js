const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verifyToken");

// Tüm kullanıcılar erişebilir
router.get("/", verifyToken, (req, res) => {
  res.status(200).json({
    message: "Yetkili erişim başarılı!",
    user: req.user,
  });
});

// Sadece admin
router.get("/admin-only", verifyToken, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Bu işlemi yapmaya yetkiniz yok, sadece admin girebilir." });
  }
  res.status(200).json({ message: "Adminlere özel içerik başarıyla gösterildi!" });
});

// Sadece editör
router.get("/editor-only", verifyToken, (req, res) => {
  if (req.user.role !== "editor") {
    return res.status(403).json({ message: "Bu işlemi yapmaya yetkiniz yok, erişim reddedildi." });
  }
  res.status(200).json({ message: "Editörlere özel içerik başarıyla gösterildi!" });
});

// Sadece satış danışmanı
router.get("/sales-only", verifyToken, (req, res) => {
  if (req.user.role !== "sales") {
    return res.status(403).json({ message: "Bu işlemi yapmaya yetkiniz yok, sadece satış danışmanları girebilir." });
  }
  res.status(200).json({ message: "Satış danışmanlarına özel içerik başarıyla gösterildi!" });
});

// Sadece finans
router.get("/finance-only", verifyToken, (req, res) => {
  if (req.user.role !== "finance") {
    return res.status(403).json({ message: "Bu işlemi yapmaya yetkiniz yok, sadece finans kullanıcıları girebilir." });
  }
  res.status(200).json({ message: "Finans kullanıcılarına özel içerik başarıyla gösterildi!" });
});

// Sadece asker
router.get("/asker-only", verifyToken, (req, res) => {
  if (req.user.role !== "asker") {
    return res.status(403).json({ message: "Bu işlemi yapmaya yetkiniz yok, sadece asker girebilir." });
  }
  res.status(200).json({ message: "Askerlere özel içerik başarıyla gösterildi!" });
});

// Sadece yönetici (manager)
router.get("/manager-only", verifyToken, (req, res) => {
  if (req.user.role !== "manager") {
    return res.status(403).json({ message: "Bu işlemi yapmaya yetkiniz yok, sadece yönetici girebilir." });
  }
  res.status(200).json({ message: "Yöneticilere özel içerik başarıyla gösterildi!" });
});

// Sadece misafir (guest)
router.get("/guest-only", verifyToken, (req, res) => {
  if (req.user.role !== "guest") {
    return res.status(403).json({ message: "Bu işlemi yapmaya yetkiniz yok, sadece misafir erişebilir." });
  }
  res.status(200).json({ message: "Misafirlere özel içerik başarıyla gösterildi!" });
});


module.exports = router;
