"use client"
import { SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

interface providerProps{
    children: React.ReactNode
}
export const Providers=({children}:providerProps)=>{
    return <RecoilRoot>
        <SessionProvider>
            {children}
        </SessionProvider>
    </RecoilRoot>
}