import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/app-home.module#AppHomeModule' },
  { path: 'admin', loadChildren: './administrador/administrador.module#AdministradorModule'},
  { path: 'profesor', loadChildren: './profesor/profesor.module#ProfesorModule'},
  { path: 'estudiante', loadChildren: './estudiante/estudiante.module#EstudianteModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
