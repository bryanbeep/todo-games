const { expressjwt: checkJwt } = require("express-jwt");
require("dotenv").config();

const verifyToken = checkJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

module.exports = verifyToken;
