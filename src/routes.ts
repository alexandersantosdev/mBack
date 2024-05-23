import { Router } from 'express';
import { BudgetController } from './controllers/budget.controller';

const router = Router();
router.get('/', (req, res) => res.send('Hello World!'));
router.get('/budget', new BudgetController().getAll);
router.get('/budget/:id', new BudgetController().getById);
router.post('/budget', new BudgetController().create);
router.put('/budget/:id', new BudgetController().update);
router.delete('/budget/:id', new BudgetController().remove);

export { router };