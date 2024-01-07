import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function GET(){
    const result = await prisma.portfolio.findMany()

    return NextResponse.json(result)
}

export async function POST(req: Request){
    const { name, link, tech } = await req.json()
    const result = await prisma.portfolio.create({
        data: {
            name: name,
            link: link,
            tech: tech
        }
    })
    return NextResponse.json(
        {
            success: true,
            message: "Portfolio Created Successfully!",
            data: result,
        },
        { status: 201 }
    );
}