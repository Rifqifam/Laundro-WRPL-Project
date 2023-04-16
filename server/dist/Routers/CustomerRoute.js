"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CustomerController_1 = require("../Controllers/CustomerController");
const router = express_1.default.Router();
router.get("/customer", CustomerController_1.getCustomer);
router.get("/customer/name", CustomerController_1.getCustomerByName);
exports.default = router;
