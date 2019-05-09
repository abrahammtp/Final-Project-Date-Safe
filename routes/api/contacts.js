const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");

// Matches with "/api/contacts"
router.route("/")
    .get(contactsController.findAll)
    .post(contactsController.create);

// Matches with "api/dates/:id"
router
    .route("/:id")
    .get(contactsController.findById)
    .put(contactsController.update)
    .delete(contactsController.delete);

module.exports = router;