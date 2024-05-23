import { Request, Response } from "express";
import { BudgetService } from '../services/BudgetService';
class BudgetController {

    async getAll(req: Request, res: Response) {
        const { page, size } = req.query;
        const pageNumber = page ? +page : 1;
        const sizeNumber = size ? +size : 10;
        const budgets = await new BudgetService().getAll(pageNumber, sizeNumber);
        res.json(budgets);
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        const budget = await new BudgetService().getById(id);
        if (!budget) return res.status(404).json({ message: 'Budget not found' });
        return res.json(budget);
    }

    async create(req: Request, res: Response) {
        const budget = await new BudgetService().create(req.body);
        if (budget.error) return res.status(400).json({ message: budget.message });
        res.json(budget);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const budget = await new BudgetService().update(id, req.body);
        if (!budget) return res.status(404).json({ message: 'Budget not found' });
        return res.json(budget);
    }

    async remove(req: Request, res: Response) {
        const { id } = req.params;
        await new BudgetService().remove(id);
        res.sendStatus(204);
    }
}

export { BudgetController };