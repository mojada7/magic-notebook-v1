import { NextRequest, NextResponse } from "next/server";
import ctdb from "../middlewares/connectToMongoDB";
import UU from '../models/addUser'

export async function POST (req:Request) {

    try {
        const body = await req.json()
        console.log(body)
        await ctdb()
        const ifUser = await UU.find({email: body.email})
        console.log(ifUser[0])
        if(ifUser[0]) {
            console.log(ifUser)
            return NextResponse.json({data:ifUser[0],message:1})
        } else {
            console.log('injast')
            const newUsr = new UU({name : body.name , email : body.email, data : {}})
            newUsr.save().then((res: any) : any =>{
                return NextResponse.json({data: null, message :2})
            }).catch((er: any)=>{
                console.log(er)
                return NextResponse.json({message :0, data: null})
            })
            
        }

    } catch {
        return NextResponse.json({message :0, data: null})
    }

}

