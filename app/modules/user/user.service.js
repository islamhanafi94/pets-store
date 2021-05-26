const userRepository = require("./user.repository");

const validateUserId = async (userId) => {
  const user = await userRepository.getUser({ _id: userId });
  if (!user) {
    throw Error("Invalid user id");
  }
};

module.exports = { validateUserId };
