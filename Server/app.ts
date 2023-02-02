import express, { Application, NextFunction , Request , Response } from "express"
import cors from "cors"
import { errorHandler } from "./middlewares/errors/errorHandler"
import { AppError, HttpCodes } from "./utils/AppError"


export const appConfig = (app:Application) =>{

    app.use(express.json()).use(cors)

    //import middlewares

   app.all("*" , (req: Request , res:Response , next :NextFunction) =>{
    next(
        new AppError({
            message : `this route ${req.originalUrl} is incorrect`,
            httpcode : HttpCodes.NOT_FOUND,
            name : AppError.name,
            isOperational : true
        })
    )
   })



    //middlewares for errors

    app.use(errorHandler)

}
