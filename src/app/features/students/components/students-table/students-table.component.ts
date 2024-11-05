import { Component, OnInit } from '@angular/core';
import { SutdentsService } from '../../services/sutdents.service';
import { IStudent } from '../../interfaces/student.interface';


@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'alias', 'email', 'age', 'action'];
  public dataSource: IStudent[]= [];

  constructor(private readonly studentService: SutdentsService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data: any) => {
      this.dataSource = data;
    });
  }


  edit(id: string) {
    console.log('Editando estudiante: ',id);
  }

  delete(id: string) {
    console.log('Elimiando estudiante: ',id);
  }
}
