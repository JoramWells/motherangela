import { NextFunction, Response, Request } from "express"

export const errorHandler = (error:Error, req:Request, res:Response, next:NextFunction) =>{
    console.error(`Error: ${error.message}`)
    res.status(500).json({message:'Internal server error'})
    next(error)
}