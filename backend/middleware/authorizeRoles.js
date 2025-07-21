const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      const userRole = req.user.role;
  
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({
          message: "Bu işlemi yapmaya yetkiniz yok, erişim reddedildi.",
        });
      }
  
      next();
    };
  };
  
  module.exports = authorizeRoles;
  