import express, { Request, Response } from "express";
const app = express()
import cors from "cors"
import { UserRouters } from "./app/modules/user/user.route";

app.use(express.json())
app.use(cors())


app.use("/api/v1/user/", UserRouters)



app.get("/", (req:Request, res:Response) =>{
    res.status(200).json({
        message: "Welcome to the Tour Management System API Test"
    })
}) 





export default app;