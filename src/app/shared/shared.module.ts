import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

// angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,

    // angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent,

    // angular material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
  ]
})
export class SharedModule { }
