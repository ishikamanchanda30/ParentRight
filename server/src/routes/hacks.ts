const express = require("express");
const router = express.Router();
router.route("/hacks" , (req : any,res: any) => {
    res.status(200).json({message: "hi"});
})
export default router;