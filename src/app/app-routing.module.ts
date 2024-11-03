import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'classes',
    loadChildren: () => import('./features/classes/classes.module').then(m => m.ClassesModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./features/students/students.module').then(m => m.StudentsModule)
  },
  {
    path: '**',
    redirectTo: 'students'// temporalmente esta es la pagina de inicio
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
