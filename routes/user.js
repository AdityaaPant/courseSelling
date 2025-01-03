const { Router } = require("express");
const { userModel } = require("../db");

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
	const { email, password, firstName, lastName } = req.body;
	await userModel.create({
		email: email,
		password: password,
		firstName: firstName,
		lastName: lastName,
	});
	res.json({
		message: "signup endpoint",
	});
});
userRouter.post("/user/signin", (req, res) => {
	res.json({
		message: "signup endpoint",
	});
});
userRouter.post("/user/purchases", (req, res) => {
	res.json({
		message: "signup endpoint",
	});
});

module.exports = { userRouter };
