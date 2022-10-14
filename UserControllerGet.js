const readModel = require('../Models/Read').getMovies;

exports.get = async (req, res, next) => {

    const model = await readModel();

    if (model.err) {
      res.status(500).send(model.err)
      return
    }

    res.status(200).send(model.data);
};