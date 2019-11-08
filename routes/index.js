const router = require("express").Router();
const savedBooksController = require("./../controllers/savedBooksController");
db = require('./../models')

router.route("/saved")
  .get(savedBooksController.findAll)
  .post(savedBooksController.create)
  .delete(savedBooksController.remove);

router.route("/saved/:id")
  .get(savedBooksController.findById)
  .post(savedBooksController.create)
  .delete(savedBooksController.remove);

module.exports = router;

