const router = require("express").Router();
const contactsController = require("../../controllers/contactsController");

router.get("/:id", contactsController.find);
router.post("/", contactsController.create);
router.post("/:id", contactsController.update);
router.delete("/:id", contactsController.remove);

module.exports = router;