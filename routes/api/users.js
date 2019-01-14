const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Get All Users
router.route("/allusers")
    .get(usersController.findAll);

// Get Users by ID
router
    .route("/:id")
    .get(usersController.findById)

module.exports = router;