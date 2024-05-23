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
exports.BudgetService = void 0;
const BudgetRepository_1 = require("../repositories/BudgetRepository");
class BudgetService {
    getAll() {
        return __awaiter(this, arguments, void 0, function* (page = 1, size = 10) {
            return yield BudgetRepository_1.BudgetRepository.getAll(page, size)
                .catch(error => []);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield BudgetRepository_1.BudgetRepository.getById(id)
                .catch(error => null);
        });
    }
    create(budget) {
        return __awaiter(this, void 0, void 0, function* () {
            const date = new Date();
            const expirationDate = new Date().setDate(date.getDate() + 10);
            budget.total = this.calcTotal(budget.items);
            budget.creationDate = date;
            budget.expirationDate = new Date(expirationDate);
            return yield BudgetRepository_1.BudgetRepository.create(budget)
                .catch(error => ({ error: true, message: error.message }));
        });
    }
    update(id, budget) {
        return __awaiter(this, void 0, void 0, function* () {
            budget.total = this.calcTotal(budget.items);
            return yield BudgetRepository_1.BudgetRepository.update(id, budget)
                .catch(error => null);
        });
    }
    remove(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield BudgetRepository_1.BudgetRepository.delete(id)
                .catch(error => null);
        });
    }
    calcTotal(items) {
        return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
}
exports.BudgetService = BudgetService;
