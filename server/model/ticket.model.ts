import { DataTypes } from 'sequelize';
import { sequelize } from '../db';

const Ticket = sequelize.define(
  'Ticket',
  {
    TicketID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    FullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Passport: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    Seat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FlightID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { tableName: 'tickets' },
);

export default Ticket;
