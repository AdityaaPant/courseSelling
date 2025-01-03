const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

// adminRouter.use(adminMiddleware);

adminRouter.post("/signup", (req, res) => {
	res.json({
		message: "signup endpoint",
	});
});
adminRouter.post("/signin", (req, res) => {
	res.json({
		message: "signup endpoint",
	});
});
adminRouter.post("/", (req, res) => {
	res.json({
		message: "course preview endpoint",
	});
});
adminRouter.put("/", (req, res) => {
	res.json({
		message: "course preview endpoint",
	});
});
adminRouter.get("//bulk", (req, res) => {
	res.json({
		message: "course preview endpoint",
	});
});

module.exports = {
	adminRouter,
};
