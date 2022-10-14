const updateModel = require('../Models/Create').postMovies;

exports.post = (req, res, next) => {

    const model = ControlerModel();

    if (model.err) {
      res.status(500).send(model.err)
      return
    }

    res.status(200).send(model.data);
};