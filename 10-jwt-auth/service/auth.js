const jwt = require("jsonwebtoken");
const secret = "Shahrukh$123@$";

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    }, // this is payload means user ka kuch data hume token ko dena he padta hey jise identify ho sake
    secret,
  );
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null
  }
}

module.exports = { setUser, getUser };
