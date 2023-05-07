const express = require("express");
const GENERAL = require("./application/utils/general");
const cors = require("cors");
const app = express();
const swagger = require("./configuration/swagger");
const { initSwagger } = require("./configuration/swagger");

app.use(express.json());
app.use(cors({ origin: GENERAL.CORS }));
app.use(express.urlencoded({ extended: true }));
app.use("/api", require("./interfaces/index"));
initSwagger(app);
app.listen(GENERAL.PORT, () => console.log(GENERAL.SERVER_START));
