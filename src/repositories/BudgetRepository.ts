import { prismaClient } from '../database/client';
import { Budget } from '../types/Budget';

class BudgetRepository {

    static async getAll(page: number = 1, size: number = 10): Promise<Budget[]> {
        const skip = (page - 1) * size;
        return await prismaClient.budget.findMany({
            skip
        }) as Budget[];
    }

    static async getById(id: string): Promise<Budget> {
        return await prismaClient.budget.findUnique({
            where: {
                id
            }
        }) as Budget;
    }

    static async create(budget: any): Promise<Budget> {
        return await prismaClient.budget.create({
            data: budget
        }) as Budget;
    }

    static async update(id: string, budget: Budget): Promise<Budget> {
        return await prismaClient.budget.update({
            where: {
                id
            },
            data: budget
        }) as Budget;
    }

    static async delete(id: string): Promise<Budget> {
        return await prismaClient.budget.delete({
            where: {
                id
            }
        }) as Budget;
    }

}

export { BudgetRepository };