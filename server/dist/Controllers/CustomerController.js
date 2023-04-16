"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCustomerByName = exports.getCustomer = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield prisma.customer.findMany();
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
});
exports.getCustomer = getCustomer;
//query
const getCustomerByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const name = req.query.name;
    try {
        const response = yield prisma.customer.findMany({
            where: {
                name: name,
            },
        });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ msg: error.message });
    }
});
exports.getCustomerByName = getCustomerByName;
