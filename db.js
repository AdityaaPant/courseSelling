const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const userSchema = new Schema({
	email: { type: String, unique: true },
	password: String,
	firstName: String,
	lastName: String,
});
const adminSchema = new Schema({
	email: { type: String, unique: true },
	password: String,
	firstName: String,
	lastName: String,
});
const courseSchema = new Schema({
	title: String,
	description: String,
	price: Number,
	ImageUrl: String,
	creatorId: ObjectId,
});
const purchaseSchema = new Schema({
	userId: ObjectId,
	couseId: ObjectId,
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const courseModel = mongoose.model("course", courseSchema);
const purchaseModel = mongoose.model("purchase", purchaseSchema);

module.exports = {
	userModel,
	adminModel,
	courseModel,
	purchaseModel,
};
(async () => {
	try {
		await mongoose.connect(
			"mongodb+srv://aditya:UGd47vKr6tFMcVa2@cluster0.yketk.mongodb.net/annu"
		);
		console.log("database connected succesfully");

		console.log("server started at http://localhost:3000");
	} catch (err) {
		console.log("error starting server", err);
	}
})();
