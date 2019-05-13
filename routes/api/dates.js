const router = require("express").Router();
const datesController = require("../../controllers/datesController");

router.get("/:id",datesController.find);
router.post("/",datesController.create);
router.post("/:id", datesController.update);
router.delete("/:id", datesController.remove);

module.exports = router;