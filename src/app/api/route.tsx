import { NextRequest, NextResponse } from "next/server";
import ctdb from "./middlewares/connectToMongoDB";
import RU from './models/addWord'

export async function POST (req:Request) {

    try {
        const body = await req.json()
        console.log(body)
        await ctdb()
        const newWord = new RU({...body})
        await newWord.save().then(()=> console.log('saved')).catch(()=>console.log('cant save in db'))
    } catch {

    }


    return NextResponse.json({message : 'hi'})

}

