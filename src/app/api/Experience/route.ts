import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(){
    const result = await prisma.experience.findMany()

    return NextResponse.json(result)
}

export async function POST(req: Request){
    const { name, place, completeTime, summary } = await req.json()
    const result = await prisma.experience.create({
        data: {
            name: name,
            place: place,
            completeTime: completeTime,
            summary: summary
        }
    })
    return NextResponse.json(
        {
            success: true,
            message: "Experience Created Successfully!",
            data: result,
        },
        { status: 201 }
    );
}