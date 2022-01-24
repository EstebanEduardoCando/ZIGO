const mongo = require("../../services/mongo-services");

async function get(req, res, next) {
  try {
    let response = "whale.js";
    moves = await mongo.findAll("whale", "moves");
    const timestamp = [];
    const value = [];
    var array = {};
    var to = "0x9ec8e8f64ec6bb47d944b4b830130b5fcf2da182";
    
    var movesArreglados = moves.map(function (moves) {
      timestamp.push(moves.timeStamp);
      if (moves.to === to) {
        value.push(moves.value);
      } else {
        value.push("-" + moves.value);
      }
      return array;
    });

    array = { timestamp: timestamp, value: value };
    movesArreglados = array;
    console.log(movesArreglados);

    return res.status(200).json(movesArreglados);
  } catch (err) {
    res.status(503).json(err);
    next(err);
  }
}

module.exports.get = get;
