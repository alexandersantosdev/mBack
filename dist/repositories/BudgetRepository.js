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
exports.BudgetRepository = void 0;
const client_1 = require("../database/client");
class BudgetRepository {
    static getAll() {
        return __awaiter(this, arguments, void 0, function* (page = 1, size = 10) {
            const skip = (page - 1) * size;
            return yield client_1.prismaClient.budget.findMany({
                skip
            });
        });
    }
    static getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield client_1.prismaClient.budget.findUnique({
                where: {
                    id
                }
            });
        });
    }
    static create(budget) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield client_1.prismaClient.budget.create({
                data: budget
            });
        });
    }
    static update(id, budget) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield client_1.prismaClient.budget.update({
                where: {
                    id
                },
                data: budget
            });
        });
    }
    static delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield client_1.prismaClient.budget.delete({
                where: {
                    id
                }
            });
        });
    }
}
exports.BudgetRepository = BudgetRepository;
