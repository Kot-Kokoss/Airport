import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

const Position = sequelize.define(
  'Position',
  {
    PositionID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Salary: {
      type: DataTypes.INTEGER,
    },
    Duties: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    Requirements: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
  },
  { tableName: 'positions' },
);

export default Position;
