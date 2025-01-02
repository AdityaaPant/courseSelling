const { Router } = require("express");

const userRouter = Router();

userRouter.post("/user/signup", (req, res) => {
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
