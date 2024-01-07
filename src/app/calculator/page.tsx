import Calculactor from "@/components/Calculator"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Calculator',
    description: 'Project 1',
}

export default function calculator(){
    return(
        <div className="grid place-items-center h-screen bg-[rgba(57,62,70,0.5)]">
            <div className="basis-1/4 py-10">
                <Calculactor />
            </div>
        </div>
    )
}