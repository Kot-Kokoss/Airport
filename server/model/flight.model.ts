import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

const Flight = sequelize.define(
  'Flight',
  {
    FlightID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    Date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    From: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    To: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    CrewID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PlaneID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FlightTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'flights' },
);

export default Flight;
