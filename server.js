const express = require("express");
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth-routes/auth.routes");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.use(authRoute);

app.listen(port, () => console.log(`Server running on port: ${port}`));
