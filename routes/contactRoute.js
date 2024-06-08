const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ messgae: "Get all contacts" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get the contact with id ${req.params.id}` });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create a new contact" });
});

router.route("/:id").put((req, res) => {
  res
    .status(200)
    .json({ message: `Update the contact with id ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res
    .status(200)
    .json({ message: `Delete the contact with id ${req.params.id}` });
});
module.exports = router;
