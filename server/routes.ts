import { Router } from 'express';
import User from './model/employee.model';
import { baseCntrl } from './service/base-service';

const setRoutes = (app: any) => {
  const router = Router();

  router.get('/stats/employee', baseCntrl.getEmployeeStats);
  router.get('/stats/plane', baseCntrl.getPlaneStats);
  router.get('/stats/crew', baseCntrl.getCrewStats);
  router.get('/stats/flight', baseCntrl.getFlightStats);
  router.get('/stats/ticket', baseCntrl.getTicketStats);

  router.get('/employee', baseCntrl.getAllEmployee);
  router.get('/position', baseCntrl.getAllPosition);
  router.get('/plane', baseCntrl.getAllPlane);
  router.get('/plane-type', baseCntrl.getAllPlaneType);
  router.get('/crew', baseCntrl.getAllCrew);
  router.get('/flight', baseCntrl.getAllFlight);
  router.get('/ticket', baseCntrl.getAllTicket);

  router.post('/employee', baseCntrl.setEmployee);
  router.post('/position', baseCntrl.setPosition);
  router.post('/plane', baseCntrl.setPlane);
  router.post('/plane-type', baseCntrl.setPlaneType);
  router.post('/crew', baseCntrl.setCrew);
  router.post('/flight', baseCntrl.setFlight);
  router.post('/ticket', baseCntrl.setTicket);

  router.delete('/employee/:id', baseCntrl.deleteEmployee);
  router.delete('/position/:id', baseCntrl.deletePosition);
  router.delete('/plane/:id', baseCntrl.deletePlane);
  router.delete('/plane-type/:id', baseCntrl.deletePlaneType);
  router.delete('/crew/:id', baseCntrl.deleteCrew);
  router.delete('/flight/:id', baseCntrl.deleteFlight);
  router.delete('/ticket/:id', baseCntrl.deleteTicket);

  app.use('/api', router);
};

export default setRoutes;
