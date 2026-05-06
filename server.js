const express = require("express");
const app = express();

require("dotenv").config();

const db = require("./database/connect");
const contactsRoutes = require("./routes/contacts");

const PORT = process.env.PORT || 3000;

app.use(express.json());

// routes
app.use("/contacts", contactsRoutes);

db.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  }
});