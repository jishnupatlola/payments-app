"use client"
interface centerProps{
    children : React.ReactNode
    
}
export const Center=({children}:centerProps)=>{
    return <div className="flex justify-center flex-col h-full">
        <div className="flex justify-center">
            {children}
        </div>
    </div>
}