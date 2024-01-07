import AddCertification from "@/components/AddCertification"
import { Metadata } from "next"

const metadata: Metadata = {
    description: "Portfolio",
    title: "MRIsdi - Certification"
}

export default function Certification(){
    return (
        <>
            <AddCertification />
        </>
    )
}