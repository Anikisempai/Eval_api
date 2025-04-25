const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")

class Album extends Model {}
Album.init(
  {
    id_album: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titre: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    dateDeSortie: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_track: {
      type: DataTypes.INTEGER,
      references: {
        model: Track,
        key: "id_track",
      },
    },
  },
  {
    sequelize,
    tableName: "Album",
    timestamps: false,
  }
);
module.exports = Album;