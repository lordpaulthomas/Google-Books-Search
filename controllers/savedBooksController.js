const db = require('./../models')

module.exports = {
  findAll: function (req, res) {
    db.Saved
      .find()
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Saved
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    const savedBook = {
      "title": req.body.body.title,
      "authors": req.body.body.authors,
      "descriptions": req.body.body.description,
      "image": req.body.body.image,
      "link": req.body.body.link
    }
    db.Saved
      .create(savedBook)
      .then(function (dbSaved) {
        console.log("Successful Save")
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  update: function (req, res) {
    db.Saved
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Saved
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.delete())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  deleteAll: function (req, res) {
    db.Saved
      .deleteMany({}, function (err) { console.log(err) })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}