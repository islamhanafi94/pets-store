const User = require("./user.model");

const getUser = async (filters, selection) => {
  const user = await User.findOne(filters, selection);
  return user;
};

module.exports = { getUser };
