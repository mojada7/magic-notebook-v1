import { NextRequest, NextResponse } from "next/server";
import ctdb from "../middlewares/connectToMongoDB";
import RU from '../models/addWord'


export async function GET(req:Request, {params} : any) {

    await ctdb()

    const wordsAr = await RU.find({difficulty : params.level})


    console.log(wordsAr)



    console.log(params.level)
    return NextResponse.json({message : `ok ${params.level}`, data : wordsAr})
}