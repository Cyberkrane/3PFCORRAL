import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IStudent } from '../../interfaces/student.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SutdentsService } from '../../services/sutdents.service';

@Component({
  selector: 'students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})
export class StudentsFormComponent {


 public abmAction: string = 'Agregar estudiante';
 public formulario: FormGroup;

 public estudiante: IStudent = {
  id: 0,
  name: '',
  alias: '',
  email: '',
  age: 0
 };

constructor(
  private readonly studentsService: SutdentsService,
  public dialogRef: MatDialogRef<StudentsFormComponent>,
  private readonly fb: FormBuilder,
  @Inject(MAT_DIALOG_DATA) public data: IStudent,
) {
  this.formulario = this.fb.group({
  id: [0],
  name: ['', Validators.required],
  alias: ['', Validators.required],
  email: ['', Validators.required],
  age: [0]
  });
}

onNoClick(): void {
  // this.dialogRef.close();
  return
}

enviar() {
  this.studentsService.createAStudent(this.formulario.value).subscribe(
    (result) => {
      this.dialogRef.close(result); // Cierra el diálogo solo tras recibir confirmación
    },
    (error) => {
      console.error('Error al crear estudiante:', error); // Maneja posibles errores
    }
  );
}

}
