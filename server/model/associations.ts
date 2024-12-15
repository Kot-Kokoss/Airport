import Crew from './crew.model';
import Employee from './employee.model';
import Flight from './flight.model';
import PlaneType from './plane-type.model';
import Plane from './plane.model';
import Position from './position.model';
import Ticket from './ticket.model';

Employee.hasMany(Plane, { foreignKey: 'EmployeeID', as: 'AssignedPlanes' });
Plane.belongsTo(Employee, { foreignKey: 'EmployeeID', as: 'AssignedEmployee' });

Employee.belongsTo(Position, { foreignKey: 'PositionID' });
Position.hasMany(Employee, { foreignKey: 'PositionID' });

Crew.belongsTo(Employee, { foreignKey: 'EmployeeID_1', as: 'Employee_1' });
Crew.belongsTo(Employee, { foreignKey: 'EmployeeID_2', as: 'Employee_2' });
Crew.belongsTo(Employee, { foreignKey: 'EmployeeID_3', as: 'Employee_3' });

Employee.hasMany(Crew, { foreignKey: 'EmployeeID_1', as: 'Crews_1' });
Employee.hasMany(Crew, { foreignKey: 'EmployeeID_2', as: 'Crews_2' });
Employee.hasMany(Crew, { foreignKey: 'EmployeeID_3', as: 'Crews_3' });

Crew.hasMany(Flight, { foreignKey: 'CrewID' });
Flight.belongsTo(Crew, { foreignKey: 'CrewID' });

Flight.hasMany(Ticket, { foreignKey: 'FlightID' });
Ticket.belongsTo(Flight, { foreignKey: 'FlightID' });

Plane.hasMany(Flight, { foreignKey: 'PlaneID' });
Flight.belongsTo(Plane, { foreignKey: 'PlaneID' });

Plane.belongsTo(PlaneType, { foreignKey: 'TypeID' });
PlaneType.hasMany(Plane, { foreignKey: 'TypeID' });
