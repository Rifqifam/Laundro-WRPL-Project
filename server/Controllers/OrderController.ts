import express, { Express, Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getOrders = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const response = await prisma.orders.findMany();
    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ msg: error.message });
  }
};
