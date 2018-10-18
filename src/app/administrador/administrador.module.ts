import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorComponent } from './administrador/administrador.component';
import { Routes, RouterModule } from '@angular/router';

import { AppShareModule } from '../app-share/app-share.module';
import { AgregarProfesorComponent } from './administrador/agregar-profesor/agregar-profesor.component';
import { AgregarCursoComponent } from './administrador/agregar-curso/agregar-curso.component';
import { EliminarProfesorComponent } from './administrador/eliminar-profesor/eliminar-profesor.component';
import { EliminarCursoComponent } from './administrador/eliminar-curso/eliminar-curso.component';
import { AsignarCursoComponent } from './administrador/asignar-curso/asignar-curso.component';
import { VerificarTransferenciaComponent } from './administrador/verificar-transferencia/verificar-transferencia.component';
import { EnviarCertificadosComponent } from './administrador/enviar-certificados/enviar-certificados.component';
import { EditarProfesorComponent } from './administrador/editar-profesor/editar-profesor.component';

const routes: Routes = [
  {
    path: '',
    component: AdministradorComponent,
    children: [
      {
        path: 'agregar_p', component: AgregarProfesorComponent
      },
      {
        path: 'mostrar_p', component: EliminarProfesorComponent
      },
      {
        path: 'eliminar_p/editar_p/:id', component: EditarProfesorComponent
      },
      {
        path: 'agregar_c', component: AgregarCursoComponent
      },
      {
        path: 'asignar_curso', component: AsignarCursoComponent
      },
      {
        path: 'eliminar_c', component: EliminarCursoComponent
      },
      {
        path: 'eliminar_p', component: EliminarProfesorComponent
      },
      {
        path: 'enviar_certificados', component: EnviarCertificadosComponent
      },
      {
        path: 'verificar_transferencia', component: VerificarTransferenciaComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    AppShareModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AdministradorComponent,
    AgregarProfesorComponent,
    AgregarCursoComponent,
    EliminarProfesorComponent,
    EliminarCursoComponent,
    AsignarCursoComponent,
    VerificarTransferenciaComponent,
    EnviarCertificadosComponent,
    EditarProfesorComponent
  ]
})
export class AdministradorModule { }
