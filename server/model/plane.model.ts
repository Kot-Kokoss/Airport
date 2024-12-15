import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

const Plane = sequelize.define(
  'Plane',
  {
    PlaneID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    Mark: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Tonnage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Characteristic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ReleaseDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FlyingHours: {
      type: DataTypes.INTEGER,
    },
    LastRepairDate: {
      type: DataTypes.DATE,
    },
    EmployeeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { tableName: 'planes' },
);

export default Plane;
