const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/sequelize")

class Track extends Model {}
Track.init(
  {
    id_Track: {
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
    tableName: "Track",
    timestamps: false,
  }
);
module.exports = Track;