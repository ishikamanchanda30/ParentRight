import express, { Request, Response } from "express";
const router = express.Router();

router.route("/hacks").get((req: Request, res: Response) => {
  res.status(200).send("hi");
});
export default router;
