import { NextRequest, NextResponse } from "next/server";
import ctdb from "../../middlewares/connectToMongoDB";
import UU from '../../models/addUser'
export async function POST(req:Request) {
    try {

        const body = await req.json()
        console.log(body)
        await ctdb()
        const user = await UU.find({name: body.email})
        console.log(user)

    } catch {

    }
}