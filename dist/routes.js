"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const budget_controller_1 = require("./controllers/budget.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => res.send('Hello World!'));
router.get('/budget', new budget_controller_1.BudgetController().getAll);
router.get('/budget/:id', new budget_controller_1.BudgetController().getById);
router.post('/budget', new budget_controller_1.BudgetController().create);
router.put('/budget/:id', new budget_controller_1.BudgetController().update);
router.delete('/budget/:id', new budget_controller_1.BudgetController().remove);