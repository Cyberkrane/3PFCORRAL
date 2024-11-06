import { Component, OnInit } from '@angular/core';
import { SutdentsService } from '../../services/sutdents.service';
import { IStudent } from '../../interfaces/student.interface';
import { MatDialog } from '@angular/material/dialog';
import { StudentsFormComponent } from '../students-form/students-form.component';


@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  public student: IStudent = {
    id: 0,
    name: '',
    alias: '',
    email: '',
    age: 0
  }
  public displayedColumns: string[] = ['id', 'name', 'alias', 'email', 'age', 'action'];
  public dataSource: IStudent[] = [];


  constructor(private readonly studentService: SutdentsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe((data: any) => {
      this.dataSource = data;
    });

    this.student = {
      id: 1,
      name: 'John Doe',
      alias: 'jdoe1',
      email: 'jdoe@me.com',
      age: 20
    }
  }


  public openDialog(id?: string): void {

 
      const dialogRef = this.dialog.open(StudentsFormComponent, {
        data: {
          id: this.student.id,
          name: this.student.name,
          alias: this.student.alias,
          email: this.student.email,
          age: this.student.age
        },
      });
      dialogRef.afterClosed().subscribe(result => {
        this.student = result;
        console.log(result);
      });
    
  }

  edit(id: string) {
    console.log('Editando estudiante: ', id);
  }

  delete(id: string) {
    console.log('Elimiando estudiante: ', id);
  }
}
