const express = require("express");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const morgan = require("morgan");
const errorHandler = require("./src/error-handler/error.middleware");
const authRoute = require("./src/routes/auth-routes/auth.routes");
const connectDB = require("./src/config/database-config/database.config");

// load env variables
dotenv.config({ path: "./src/config/env/config.env" });

const app = express();

//instatiate port
const port = process.env.PORT || 5000;

// connect to databse
connectDB();

app.use(express.json());
app.use(cookieParser());
//Dev logger
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// Mount app routers
app.use("/api/v1/risposta/auth", authRoute);

app.use(errorHandler);

const server = app.listen(port, () =>
	console.log(`Server running in ${process.env.NODE_ENV} on port: ${port}`.yellow.bold.underline)
);

//  Handle rejections
process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`.red);
	//close server and exit process
	server.close(() => process.exit(1));
});
