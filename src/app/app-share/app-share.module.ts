import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material/app-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [ ],
  exports: [
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AppShareModule { }
