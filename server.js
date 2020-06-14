const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth-routes/auth.routes");

// load env variables
dotenv.config({ path: "./config/env/config.env" });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.use(authRoute);

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} on port: ${port}`));
