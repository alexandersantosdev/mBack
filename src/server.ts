
import express, { Application } from 'express';
import { router } from './routes';

const app: Application = express();
const PORT = +process.env.PORT! || 3000;
app.use(express.json());
app.use('/api/', router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));