module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("items", {
    name: {
      type: Sequelize.STRING
    },
    bin_height: {
      type: Sequelize.INTEGER
    }
  });

  return User;
};
