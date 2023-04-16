import express from "express";

import { getOrders } from "../Controllers/OrderController";

const router = express.Router();

router.get("/orders", getOrders);
