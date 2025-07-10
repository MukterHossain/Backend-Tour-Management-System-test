/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
// import { User } from "./user.model";
import httpStatus, { StatusCodes } from "http-status-codes"
import { UserServices } from "./user.service";
import AppError from "../../errorHelpers/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";


const createUser = async(req:Request, res:Response, next:NextFunction) =>{
    try {
        // const body = req.body
        // const user = await User.create(body)
        // throw new AppError(httpStatus.BAD_REQUEST, "fake error")
        const user = await UserServices.createUser(req.body)
        res.status(httpStatus.CREATED).json({
            success:true,
            message: "User created successfully",
            user
        })
    } catch (error) {
      console.log(error) 
    //   res.status(StatusCodes.BAD_REQUEST).json({
    //       succcess: false,
    //       message: `Something went wrong ${StatusCodes.BAD_REQUEST}`,
    //       error
    //   }) 
    next(error)
    }
}
// const getAllUsers = async (req:Request, res:Response, next:NextFunction) => {
//     try {
//         const users = await userService.getAllUsers()
//         return users
//         // res.status(httpStatus.CREATED).json({
//         //     message: "User Created Successfully",
//         //     users
//         // })
//     } catch (err:any) {
//         console.log(err)
//         next(err)
//     }
// }

const getAllUsers = catchAsync(async (req:Request, res:Response, next:NextFunction) => {
    const result = await UserServices.getAllusers()
        // res.status(httpStatus.OK).json({
        //     success: true,
        //     message: "All Users Retrived Successfully",
        //     users
        // })
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.CREATED,
            message: "All Users Retrived Successfully",
            data: result.data,
            meta: result.meta
        })
})



export const userControllers = {
    createUser,
    getAllUsers
}