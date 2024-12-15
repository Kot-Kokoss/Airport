import express from 'express';
import { sequelize } from './db';
import './model/associations';
import cors from 'cors';
import setRoutes from './routes';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

setRoutes(app);

(async () => {
  try {
    // await sequelize.sync({ force: true });
    await sequelize.sync();
    console.log('Подключение к базе данных успешно.');

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Не удалось подключиться к базе данных:', error);
  }
})();
