const express = require("express");
const app = express();

require("dotenv").config();

const db = require("./database/connect");
const contactsRoutes = require("./routes/contacts");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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