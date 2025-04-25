const {} = require("sequelize");
const album = require("../models/album");


class albumService {
  async getAllalbum() {
    return await album.findAll()
  }

}
module.exports = new albumService();