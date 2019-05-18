const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");

router.route("/")
.post(contactsController.update);

router.route("/:id").get(contactsController.find)

router.post("/", contactsController.update);
router.delete("/:id", contactsController.remove);

module.exports = router;