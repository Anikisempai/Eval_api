const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")

class Artiste extends Model {}
Artiste.init(
  {
    id_artiste: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    id_profil: {
      type: DataTypes.INTEGER,
      references: {
        model: Profil,
        key: "id_profil",
      },
    },
    id_album: {
      type: DataTypes.INTEGER,
      references: {
        model: Album,
        key: "id_album",
      },
    },
  },
  {
    sequelize,
    tableName: "Artiste",
    timestamps: false,
  }
);
module.exports = Artiste;