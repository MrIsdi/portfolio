import AddExperience from "@/components/AddExperience"
import { Metadata } from "next"

const metadata: Metadata = {
    description: "Portfolio",
    title: "MRIsdi - Experience"
}

export default function Experience(){
    return (
        <>
            <AddExperience />
        </>
    )
}