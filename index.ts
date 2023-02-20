import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port: number | string = 8000;


app.get("/", (req: Request, res: Response) => {
    res.status(200).send({
        data: {
            message: "Goodbye, world"
        }
    })
})

app.get("/hello", (req: Request, res: Response) => {
    const name = req.query.name
    res.status(200).send({
        data: {
            message: `Hola, ${name || "anonimo"}`
        }
    })
})

app.listen(port, () => {
    console.log(`Puerto : htttp://localhost:${port}`);
})
