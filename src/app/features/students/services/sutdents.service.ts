import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../interfaces/student.interface';

@Injectable({
  providedIn: 'root'
})
export class SutdentsService {
 

  private readonly apiUrl = 'http://localhost:3000/students';

  constructor(private readonly http: HttpClient) { }

  getAllStudents(): Observable<IStudent[]> {
    console.log('Estas conectado a la base de datos: ' + this.apiUrl);
    return this.http.get<IStudent[]>(this.apiUrl);
  }

  createAStudent(value: IStudent): Observable<IStudent> {
    console.log('Datos del inscripto: ', value);
    return this.http.post<IStudent>(this.apiUrl, value);
  }

  EditAStudent(value: IStudent): Observable<IStudent> {
    return this.http.put<IStudent>(this.apiUrl, value);
  }
  getAStudentById(id: string): Observable<IStudent> {
    return this.http.get<IStudent>(`${this.apiUrl}/${id}`);
  }

  deleteAStudent(id: string): Observable<IStudent> {
    return this.http.delete<IStudent>(`${this.apiUrl}/${id}`);
  }
}
