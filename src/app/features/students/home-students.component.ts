import { Component, OnInit } from '@angular/core';
import { SutdentsService } from './services/sutdents.service';

@Component({
  selector: 'app-home-students',
  templateUrl: './home-students.component.html',
  styleUrls: ['./home-students.component.scss']
})
export class HomeStudentsComponent implements OnInit {

  public students = [];

  constructor(private readonly studentService: SutdentsService) { }

  ngOnInit(): void {
    this.showAllStudents();
  }

  showAllStudents() {
    this.studentService.getAllStudents().subscribe((data: any) => {
      this.students = data;
      console.log(this.students);
    });
  }
  //TODO: Implementar el metodo para crear un estudiante
  //TODO: Implementar el metodo para borrar un estudiante
  //TODO: Implementar el metodo para editar un estudiante
  //TODO: Implementar el metodo para buscar un estudiante

}
