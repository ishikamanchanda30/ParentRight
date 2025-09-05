import express, { Request, Response } from "express";
import Hack from "../model/baby-hacks";
const router = express.Router();

router.route("/hacks").get( async (req: Request, res: Response) => {
  try {
    const hacks = await Hack.find();
    console.log("data");
    res.status(300).json(hacks);
    console.log(res);
  } catch (err) {
    res.status(500).json({ message: "Error Fetching Database" });
  }
});

export default router;
