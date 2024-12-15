import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  getEmployeeStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats/employee`);
  }

  getPlaneStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats/plane`);
  }

  getCrewStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats/crew`);
  }

  getFlightStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats/flight`);
  }

  getTicketStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/stats/ticket`);
  }

  getAllEmployee(): Observable<any> {
    return this.http.get(`${this.apiUrl}/employee`);
  }

  getAllPosition(): Observable<any> {
    return this.http.get(`${this.apiUrl}/position`);
  }

  getAllPlane(): Observable<any> {
    return this.http.get(`${this.apiUrl}/plane`);
  }

  getAllPlaneType(): Observable<any> {
    return this.http.get(`${this.apiUrl}/plane-type`);
  }

  getAllCrew(): Observable<any> {
    return this.http.get(`${this.apiUrl}/crew`);
  }

  getAllFlight(): Observable<any> {
    return this.http.get(`${this.apiUrl}/flight`);
  }

  getAllTicket(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ticket`);
  }

  createEmployee(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/employee`, data);
  }

  createPosition(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/position`, data);
  }

  createPlane(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/plane`, data);
  }

  createPlaneType(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/plane-type`, data);
  }

  createCrew(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crew`, data);
  }

  createFlight(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/flight`, data);
  }

  createTicket(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ticket`, data);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/employee/${id}`);
  }

  deletePosition(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/position/${id}`);
  }

  deletePlane(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/plane/${id}`);
  }

  deletePlaneType(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/plane-type/${id}`);
  }

  deleteCrew(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/crew/${id}`);
  }

  deleteFlight(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/flight/${id}`);
  }

  deleteTicket(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/ticket/${id}`);
  }
}
