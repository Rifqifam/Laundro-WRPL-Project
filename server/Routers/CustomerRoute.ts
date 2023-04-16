import express from "express";

import {
  getCustomer,
  getCustomerByName,
} from "../Controllers/CustomerController";

const router = express.Router();

router.get("/customer", getCustomer);
router.get("/customer/name", getCustomerByName);

export default router;
