const router = require("express").Router();
const bookRoutes = require("./books");
// const keyRoute = require("./key");

// Book routes
router.use("/books", bookRoutes);

// NOTE
// This route commented out because it kept throwing error - 
// I couldn't retrieve my API key as anything other than an object, 
// even when copying the same format as something that worked on the 2nd project

// router.use("/key", keyRoute);

module.exports = router;
