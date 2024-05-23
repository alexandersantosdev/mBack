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
exports.BudgetController = void 0;
const BudgetService_1 = require("../services/BudgetService");
class BudgetController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page, size } = req.query;
            const pageNumber = page ? +page : 1;
            const sizeNumber = size ? +size : 10;
            const budgets = yield new BudgetService_1.BudgetService().getAll(pageNumber, sizeNumber);
            res.json(budgets);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const budget = yield new BudgetService_1.BudgetService().getById(id);
            if (!budget)
                return res.status(404).json({ message: 'Budget not found' });
            return res.json(budget);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const budget = yield new BudgetService_1.BudgetService().create(req.body);
            if (budget.error)
                return res.status(400).json({ message: budget.message });
            res.json(budget);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const budget = yield new BudgetService_1.BudgetService().update(id, req.body);
            if (!budget)
                return res.status(404).json({ message: 'Budget not found' });
            return res.json(budget);
        });
    }
    remove(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield new BudgetService_1.BudgetService().remove(id);
            res.sendStatus(204);
        });
    }
}
exports.BudgetController = BudgetController;
