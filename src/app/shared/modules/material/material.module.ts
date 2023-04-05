import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

const materialComponents:any=[
MatButtonModule,
MatCardModule,
MatFormFieldModule,
MatInputModule,
MatRadioModule,
MatIconModule,
MatDialogModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialComponents
  ],
  exports:[
    materialComponents
  ]
})
export class MaterialModule { }
