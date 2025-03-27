"use client"
import { authOptions } from "@/app/lib/auth";

import { getServerSession } from "next-auth"
import { SessionProvider } from "next-auth/react"
import { redirect } from "next/navigation";

export async function page(){
    const session=await getServerSession(authOptions);
    if (session?.user){
        redirect('/dashboard')
    }else{
        redirect('/api/auth/signup')
    }
}
