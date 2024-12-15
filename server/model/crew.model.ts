import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

const Crew = sequelize.define(
  'Crew',
  {
    CrewID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    FlyingHours: {
      type: DataTypes.INTEGER,
    },
    EmployeeID_1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EmployeeID_2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EmployeeID_3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: 'crews' },
);

export default Crew;
