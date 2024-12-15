import Crew from '../model/crew.model';
import Employee from '../model/employee.model';
import Flight from '../model/flight.model';
import PlaneType from '../model/plane-type.model';
import Plane from '../model/plane.model';
import Position from '../model/position.model';
import Ticket from '../model/ticket.model';

const EmployeeAttr = ['FullName', 'Phone', 'PositionID'];

class BaseCntrl {
  async getAllEmployee(req: any, res: any) {
    try {
      const data = await Employee.findAll({});
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllPosition(req: any, res: any) {
    try {
      const data = await Position.findAll({});
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllPlane(req: any, res: any) {
    try {
      const data = await Plane.findAll({});
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllPlaneType(req: any, res: any) {
    try {
      const data = await PlaneType.findAll({});
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllCrew(req: any, res: any) {
    try {
      const data = await Crew.findAll({});
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllFlight(req: any, res: any) {
    try {
      const data = await Flight.findAll({});
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAllTicket(req: any, res: any) {
    try {
      const data = await Ticket.findAll({});
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async setEmployee(req: any, res: any) {
    try {
      const data = await Employee.create({ ...req.body });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async setPosition(req: any, res: any) {
    try {
      const data = await Position.create({ ...req.body });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async setPlane(req: any, res: any) {
    try {
      const data = await Plane.create({ ...req.body });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async setPlaneType(req: any, res: any) {
    try {
      const data = await PlaneType.create({ ...req.body });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async setCrew(req: any, res: any) {
    try {
      const data = await Crew.create({ ...req.body });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async setFlight(req: any, res: any) {
    try {
      const data = await Flight.create({ ...req.body });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async setTicket(req: any, res: any) {
    try {
      const data = await Ticket.create({ ...req.body });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteEmployee(req: any, res: any) {
    const id = req.params.id;
    try {
      const data = await Employee.destroy({
        where: { EmployeeID: id },
      });
      res.json({ message: 'Element deleted successfully', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deletePosition(req: any, res: any) {
    const id = req.params.id;
    try {
      const data = await Position.destroy({
        where: { PositionID: id },
      });
      res.json({ message: 'Element deleted successfully', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deletePlane(req: any, res: any) {
    const id = req.params.id;
    try {
      const data = await Plane.destroy({
        where: { PlaneID: id },
      });
      res.json({ message: 'Element deleted successfully', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deletePlaneType(req: any, res: any) {
    const id = req.params.id;
    try {
      const data = await PlaneType.destroy({
        where: { PlaneTypeID: id },
      });
      res.json({ message: 'Element deleted successfully', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteCrew(req: any, res: any) {
    const id = req.params.id;
    try {
      const data = await Crew.destroy({
        where: { CrewID: id },
      });
      res.json({ message: 'Element deleted successfully', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteFlight(req: any, res: any) {
    const id = req.params.id;
    try {
      const data = await Flight.destroy({
        where: { FlightID: id },
      });
      res.json({ message: 'Element deleted successfully', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async deleteTicket(req: any, res: any) {
    const id = req.params.id;
    try {
      const data = await Ticket.destroy({
        where: { TicketID: id },
      });
      res.json({ message: 'Element deleted successfully', data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getEmployeeStats(req: any, res: any) {
    try {
      const data = await Employee.findAll({
        include: [
          {
            model: Position,
            attributes: ['Name', 'Salary', 'Duties', 'Requirements'],
          },
        ],
      });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getPlaneStats(req: any, res: any) {
    try {
      const data = await Plane.findAll({
        include: [
          {
            model: PlaneType,
            attributes: ['Name', 'Target', 'Constraint'],
          },
          {
            model: Employee,
            as: 'AssignedEmployee',
            attributes: EmployeeAttr,
          },
        ],
      });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getCrewStats(req: any, res: any) {
    try {
      const data = await Crew.findAll({
        include: [
          {
            model: Employee,
            as: 'Employee_1',
            attributes: EmployeeAttr,
          },
          {
            model: Employee,
            as: 'Employee_2',
            attributes: EmployeeAttr,
          },
          {
            model: Employee,
            as: 'Employee_3',
            attributes: EmployeeAttr,
          },
        ],
      });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getFlightStats(req: any, res: any) {
    try {
      const data = await Flight.findAll({
        include: [
          {
            model: Plane,
            attributes: ['Mark', 'TypeID', 'FlyingHours'],
          },
          {
            model: Crew,
            attributes: ['FlyingHours', 'EmployeeID_1', 'EmployeeID_2', 'EmployeeID_3'],
          },
        ],
      });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getTicketStats(req: any, res: any) {
    try {
      const data = await Ticket.findAll({
        include: [
          {
            model: Flight,
            attributes: ['Date', 'Time', 'From', 'To', 'FlightTime'],
          },
        ],
      });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export const baseCntrl = new BaseCntrl();
