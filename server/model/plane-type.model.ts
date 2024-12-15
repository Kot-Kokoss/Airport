import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

const PlaneType = sequelize.define(
  'PlaneType',
  {
    TypeID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Target: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Constraint: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'planes_types' },
);

export default PlaneType;
