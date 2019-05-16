const router = require("express").Router();
const datesController = require("../../controllers/datesController");


router.route("/")
.get(datesController.find)
.post(datesController.update);


router.post("/:id", datesController.update);
router.delete("/:id", datesController.remove);

module.exports = router;