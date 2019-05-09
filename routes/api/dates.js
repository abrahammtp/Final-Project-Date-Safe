const router = require("express").Router();
const datesController = require("../../controllers/datesController");


router.post("/dates/:uid", (req, res) => {

    // // Form validation
    // const { errors, isValid } = validateLoginInput(req.body);
    // // Check validation
    // if (!isValid) {
    //   return res.status(400).json(errors);
    // }  
    // // Find user by email
    // User.findOne({ req.params.uid }).then(user => {
    //   // Check if user exists
    //   if (!user) {
    //     return res.status(404).json({ emailnotfound: "Email not found" });
    //   }
    // })
})

module.exports = router;