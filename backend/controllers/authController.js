const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Token üretici fonksiyon
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role  // 👑 rol bilgisi token içinde
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

// Kullanıcı Kaydı (Register)
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Email daha önce kayıtlı mı?
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Bu email zaten kayıtlı' });
    }

    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcı oluştur
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "user", // dışarıdan gelirse admin olabilir ama default "user"
    });

    const token = generateToken(user);

    res.status(201).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: 'Kayıt sırasında bir hata oluştu', error: err.message });
  }
};

// Kullanıcı Girişi (Login)
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Kullanıcı var mı?
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Geçersiz e-posta' });
    }

    // Şifre eşleşiyor mu?
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Hatalı şifre' });
    }

    const token = generateToken(user);

    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: 'Girişte bir hata oluştu', error: err.message });
  }
};
