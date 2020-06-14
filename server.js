const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const authRoute = require("./routes/auth-routes/auth.routes");

const app = express();

//instatiate port
const port = process.env.PORT || 5000;

// load env variables
dotenv.config({ path: "./config/env/config.env" });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Dev logger
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// Mount app routers
app.use("/api/v1/risposta", authRoute);

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} on port: ${port}`));
