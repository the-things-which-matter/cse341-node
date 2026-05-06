const db = require("../database/connect");
const { ObjectId } = require("mongodb");

// GET all contacts
const getAll = (req, res) => {
  const result = db.getDb().db().collection("contacts").find();

  result.toArray().then((contacts) => {
    res.json(contacts);
  });
};

// GET single contact
const getSingle = (req, res) => {
  const contactId = req.params.id;

  const result = db
    .getDb()
    .db()
    .collection("contacts")
    .find({ _id: new ObjectId(contactId) });

  result.toArray().then((contacts) => {
    res.json(contacts[0]);
  });
};

module.exports = {
  getAll,
  getSingle
};