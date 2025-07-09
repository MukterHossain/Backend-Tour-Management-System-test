/* eslint-disable no-console */
import  {Server} from "http"
import mongoose from "mongoose"
import app from "./app";
import { envVars } from "./app/config/env";



let server: Server;


const startServer = async () => {
    try {
        console.log(envVars.NODE_ENV)
        await mongoose.connect(envVars.DB_URL)
        console.log("Server Connect successfully!")
       server = app.listen(envVars.PORT, () => {
            console.log(`Tour Management server runnig in port ${envVars.PORT}`)
        })
    } catch (error) {
        console.log(error) 
        
    }
    
}

startServer()

 /**
  * unhandled rejection error
  * uncaught rejection  error 
  * signal termination SIGTERM 
  */

 process.on("unhandledRejection", (err) =>{
    console.log("Unhandled Rejection detected.... server Shutiog down ...", err)
    if(server){
        server.close(() =>{
            process.exit(1)
        })
    }
    process.exit(1)
 })

//  Promise.reject(new Error("I forgot to catch this Promise"))

 process.on("uncaughtException", (err) =>{
    console.log("uncaught Exception Rejection detected.... server Shutiog down ...", err)
    if(server){
        server.close(() =>{
            process.exit(1)
        })
    }
    process.exit(1)
 })

// throw new Error("I forgot to catch local error")

 process.on("SIGINT", () =>{
    console.log("SIGINT detected.... server Shutiog down ...")
    if(server){
        server.close(() =>{
            process.exit(1)
        })
    }
    process.exit(1)
 })

// throw new Error("I forgot to catch local error")
 process.on("SIGTERM", () =>{
    console.log("SIGTERM detected.... server Shutiog down ...")
    if(server){
        server.close(() =>{
            process.exit(1)
        })
    }
    process.exit(1)
 })

// throw new Error("I forgot to catch local error")





