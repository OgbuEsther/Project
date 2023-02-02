import {Request ,Response , NextFunction } from "express"


import {AppError , HttpCodes} from "../../utils/AppError"

export const devError = (err:AppError , res:Response) =>{
return res.status(HttpCodes.INTERNAL_SERVER_ERROR).json({
    name : AppError.name,
    error : err,
    stack : err.stack,
    status: err.httpcode,
    message : err.message

})
}


export const errorHandler =(err: AppError,req:Request , res:Response , next:NextFunction)=>{
    devError(err , res)
}