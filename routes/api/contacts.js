const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");

router.route("/")
.get(contactsController.find)
.post(contactsController.update);


router.post("/", contactsController.update);
router.delete("/:id", contactsController.remove);

module.exports = router;