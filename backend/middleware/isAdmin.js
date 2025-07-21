const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Bu işlemi yapmaya yetkiniz yok, sadece admin girebilir."
      });
    }
    next();
  };
  
  module.exports = isAdmin;
  