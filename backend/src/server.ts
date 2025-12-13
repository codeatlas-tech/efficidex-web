import express from "express";
import cors from "cors";
import { env } from "./config/env";
import contactRouter from "./api/contact";
import demoRouter from "./api/demo";


const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
    res.json({ status: "ok" });
});

app.use("/api/contact", contactRouter);
app.use("/api/demo", demoRouter);


app.listen(env.PORT, () => {
    console.log(`Backend running on http://localhost:${env.PORT}`);
});
