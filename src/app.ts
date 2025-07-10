/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import express, {  NextFunction, Request, Response } from "express";
const app = express()
import cors from "cors"
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import httpStatus from "http-status-codes"

app.use(express.json())
app.use(cors())


app.use("/api/v1/", router)



app.get("/", (req:Request, res:Response) =>{
    res.status(200).json({
        message: "Welcome to the Tour Management System API Test"
    })
}) 



app.use(globalErrorHandler)
app.use(notFound)





export default app;