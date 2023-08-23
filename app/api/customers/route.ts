//@ts-nocheck
import prisma from "../../../prisma";
import { NextResponse } from "next/server";
import { main } from "./../../database/Conn";

export const GET = async (req: Request, res: NextResponse) => {
  try {
    await main();
    const customers = await prisma.customer.findMany();
    if (customers.length == 0) return NextResponse.json({ message: "Error 404 Data not found"}, { status: 404 }); 
    return NextResponse.json({ customers }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request, res: NextResponse) => {
  try {
    const { name, email,phone,location } = await req.json();
    await main();
    const customers = await prisma.customer.create({ data: { name, email,phone,location} });
    return NextResponse.json({ message: "Success", customers }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

