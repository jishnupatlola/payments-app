"use client"
import { Button } from "./button"

interface AppbarProps{
    user?:{
        name?: string | null;
    }
    onsignin : any
    onsignout : any
}

export const Appbar=({
    user,
    onsignin,
    onsignout
}:AppbarProps)=>{
    return <div className="flex justify-between border-b px-4 border-slate-300">
        <div className="text-lg flex flex-col justify-center">
            PayTM
        </div>
        <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onsignout : onsignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}