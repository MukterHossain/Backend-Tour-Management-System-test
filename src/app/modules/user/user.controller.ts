import { Request, Response } from "express";
import { User } from "./user.model";


const createUser = async(req:Request, res:Response) =>{
    try {
        const body = req.body
        const user = await User.create(body)
        res.status(201).json({
            success:true,
            message: "User created successfully",
            user
        })
    } catch (error) {
      console.log(error)  
    }
}



export const userControllers = {
    createUser
}