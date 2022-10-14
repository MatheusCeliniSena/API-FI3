const deleteModel = require('../Models/Delete').deleteMovies;

exports.delete = async (req, res, next) => {
  const { id } = req.params;

  const model = await deleteModel(id);

  if (model.err) {
    res.status(500).send(model.err)
    return
  }

  res.status(200).send(model.data);
};

