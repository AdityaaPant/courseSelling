const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.Types.objectId;
const userSchema = Schema({
	email: { type: String, unique: true },
	password: String,
	firstName: String,
	lastName: String,
});
const adminSchema = Schema({
	email: { type: String, unique: true },
	password: String,
	firstName: String,
	lastName: String,
});
const courseSchema = Schema({
	email: { type: String, unique: true },
	password: String,
	firstName: String,
	lastName: String,
});
const purchaseSchema = Schema({});

const userModel = mongoose.Model("user", userSchema);
const adminModel = mongoose.Model("admin", userSchema);
const courseModel = mongoose.Model("course", userSchema);
const purchaseModel = mongoose.Model("purchase", userSchema);
