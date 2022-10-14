 exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota PUT com ID! --> ${id}`);
 };
