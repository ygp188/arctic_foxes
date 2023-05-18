const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fox extends Model {
    static associate() {}
  }

  Fox.init(
    {
      name: DataTypes.TEXT,
      img: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Fox',
    },
  );

  return Fox;
};
