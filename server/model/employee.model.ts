import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

const Employee = sequelize.define(
  'Employee',
  {
    EmployeeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    FullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Passport: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    PositionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: 'employees' },
);

export default Employee;
