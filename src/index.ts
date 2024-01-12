import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { router as authRouter } from "./routes/authRoute";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.json());
app.use("/", authRouter);

app.listen(port, () => {
  console.log(`server run on start ${port}`);
});
