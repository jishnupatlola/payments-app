import { SessionProvider } from "next-auth/react"
import { authOptions } from "@/app/lib/auth"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"


export const GET= async ()=>{
    const session=await getServerSession(authOptions)
    if(session?.user){
        return NextResponse.json({
            user:session.user
        })
    }else{
        return NextResponse.json({
            message:"you are not logged in"
        },{
            status:403
        })
    }
}