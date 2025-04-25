const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")

class Genre extends Model {}
Genre.init(
  {
    id_genre: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Genre",
    timestamps: false,
  }
);
module.exports = Genre;