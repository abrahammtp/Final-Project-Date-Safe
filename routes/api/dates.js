const router = require("express").Router();
const datesController = require("../../controllers/datesController");


router.route("/")
.post(datesController.update);

router.route("/:id").get(datesController.find)


router.post("/:id", datesController.update);
router.delete("/:id", datesController.remove);

module.exports = router;