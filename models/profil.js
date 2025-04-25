const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")

class Profil extends Model {}
Profil.init(
  {
    id_profil: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_artiste: {
      type: DataTypes.INTEGER,
      references: {
        model: Artiste,
        key: "id_artiste",
      },
    },
  },
  {
    sequelize,
    tableName: "Profil",
    timestamps: false,
  }
);
module.exports = Profil;