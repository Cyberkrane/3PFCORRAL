import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SutdentsService {

  private readonly apiUrl = 'http://localhost:3000/students';

  constructor(private readonly http: HttpClient) { }

  getAllStudents(): Observable<any> {
    console.log('Estas conectado a la base de datos: ' + this.apiUrl);
    return this.http.get(this.apiUrl);
  }

    //TODO: Implementar el metodo para crear un estudiante
  //TODO: Implementar el metodo para borrar un estudiante
  //TODO: Implementar el metodo para editar un estudiante
  //TODO: Implementar el metodo para buscar un estudiante

}
