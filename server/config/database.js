const mongoose = require("mongoose");
require("dotenv").config();

const { MONGODB_URI } = process.env;

exports.connect = () => {
	if (!MONGODB_URI) {
		throw new Error("❌ MONGODB_URI not found in env");
	}

	mongoose
		.connect(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log("✅ DB Connection Success"))
		.catch((err) => {
			console.log("❌ DB Connection Failed");
			console.log(err);
			process.exit(1);
		});
};