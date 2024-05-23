import { Budget } from "../types/Budget";
import { BudgetRepository } from '../repositories/BudgetRepository';
class BudgetService {

    async getAll(page: number = 1, size: number = 10): Promise<Budget[]> {
        return await BudgetRepository.getAll(page, size)
            .catch(error => []);
    }

    async getById(id: string): Promise<Budget | null> {
        return await BudgetRepository.getById(id)
            .catch(error => null);
    }

    async create(budget: Budget): Promise<Budget | any> {
        const date = new Date();
        const expirationDate = new Date().setDate(date.getDate() + 10);

        budget.total = this.calcTotal(budget.items);

        budget.creationDate = date;
        budget.expirationDate = new Date(expirationDate);

        return await BudgetRepository.create(budget)
            .catch(error => ({ error: true, message: error.message }));
    }

    async update(id: string, budget: Budget): Promise<Budget | null> {
        budget.total = this.calcTotal(budget.items);

        return await BudgetRepository.update(id, budget)
            .catch(error => null);
    }

    async remove(id: string): Promise<void> {
        await BudgetRepository.delete(id)
            .catch(error => null);
    }

    private calcTotal(items: any): number {
        return items.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0);
    }

}

export { BudgetService };