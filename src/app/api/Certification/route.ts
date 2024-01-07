import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(){
    const result = await prisma.certification.findMany()

    return NextResponse.json(result)
}

export async function POST(req: Request){
    const { name, organizer, completeTime } = await req.json()
    const result = await prisma.certification.create({
        data: {
            name: name,
            organizer: organizer,
            completeTime: completeTime
        }
    })
    return NextResponse.json(
        {
            success: true,
            message: "Certification Created Successfully!",
            data: result,
        },
        { status: 201 }
    );
}