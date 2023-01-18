module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };