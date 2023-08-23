import prisma from "../../../../prisma";
import { NextResponse } from "next/server";
import { main } from "../../../database/Conn";

export const GET = async (req: Request, {params} ) => {
    try {
      const { id } = params;
      await main();
      const customer = await prisma.customer.findUnique({ where: {id} });
      if (!customer) {
        return NextResponse.json({ message: `No Data avaliable in Database`}, { status: 404 });
      }
      console.log(customer)
      return NextResponse.json({ message: `Updated customer data : `,customer}, { status: 200 });
      
    } catch (err) {
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    } finally {
      await prisma.$disconnect();
    }
  };

export const PATCH = async (req: Request, {params}) => {
  try {
    const {id} = params
    if (!id) {
      return NextResponse.json({message:"No Data to Update"},{status: 404})
    }
    await prisma.$connect()
    const body = await req.json()
    const { name,email,phone,location} = body
    
    const updateCustomer = await prisma.customer.update({where: {id}, data: {name,email,phone,location}})
    if (!updateCustomer) {
      return NextResponse.json({message:"No Data to Update"},{status: 404})
    }
    return NextResponse.json({message:"Customer data updated : ",updateCustomer},{status: 201})
  } catch (error) {
    return NextResponse.json({message:" Error",error},{status: 500})
    
  } finally {
    await prisma.$disconnect
  }
}


export const DELETE = async (req: Request, {params}) => {
  try {
    const {id} = params
    await prisma.$connect()
        
    const updateCustomer = await prisma.customer.delete({where: {id}})
    if (!updateCustomer) {
      return NextResponse.json({message:"No Data Found"},{status: 404})
    }
    return NextResponse.json({message:"Customer Data Deleted : ",updateCustomer},{status: 201})
  } catch (error) {
    return NextResponse.json({message:" Error",error},{status: 500})
    
  } finally {
    await prisma.$disconnect
  }
}

