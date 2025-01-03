const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
const app = express();
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

(async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://aditya:UGd47vKr6tFMcVa2@cluster0.yketk.mongodb.net/annu"
		);
		console.log("database connected succesfully");
		app.listen(3000);
		console.log("server started at http://localhost:3000");
	} catch (err) {
		console.log("error starting server", err);
	}
})();
