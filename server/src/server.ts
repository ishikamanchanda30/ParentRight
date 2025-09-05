import express from "express";
import dotenv from "dotenv";
import hacksRouter from "./routes/hacks";

dotenv.config();

const app = express();
const port = 5000;

app.use("/hacks", hacksRouter);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
