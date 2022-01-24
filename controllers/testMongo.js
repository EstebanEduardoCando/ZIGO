const mongo = require("../services/mongo-services");

async function get(req, res, next) {
  try {
    
    let response = 'esta es una prueba en mongo';
    let moves = mongo.findAll("whale","moves");

  } catch (err) {
    res.status(503).json(err);
    next(err);
  }
}








module.exports.get = get;
