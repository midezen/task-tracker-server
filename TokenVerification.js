import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    !token && res.status(401).json("You're not authenticated");

    jwt.verify(token, process.env.jwtKey, (err, userInfo) => {
      err && res.status(401).json("invalid token");
      req.user = userInfo;
      next();
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const verifyTokenAndAuthorization = (req, res, next) => {
  try {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return res.status(403).json("You're not allowed to do that");
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const verifyTokenAndAdmin = (req, res, next) => {
  try {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        return res.status(403).json("You're not allowed to do that");
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};
