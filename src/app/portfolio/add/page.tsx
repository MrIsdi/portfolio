import AddPortfolio from "@/components/AddPortfolio"
import { Metadata } from "next"

const metadata: Metadata = {
    description: "Portfolio",
    title: "MRIsdi - Portfolio"
}

export default function Portfolio(){
    return (
        <>
            <AddPortfolio />
        </>
    )
}