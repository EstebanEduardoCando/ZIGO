async function get(req, res, next) {
  try {
    
    let response = 'esta es una prueba';

    res.status(200).json(response);

  } catch (err) {
    logger.error(req, "Error en test " + JSON.stringify(err.message));
    res.status(503).json(err);
    next(err);
  }
}




module.exports.get = get;
