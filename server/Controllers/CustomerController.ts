import express, { Express, Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getCustomer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const response = await prisma.customer.findMany();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};

//query
export const getCustomerByName = async (
  req: Request,
  res: Response
): Promise<void> => {
  const name: string = req.query.name as string;
  try {
    const response = await prisma.customer.findMany({
      where: {
        name: name,
      },
    });

    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};
