import { Component, OnInit } from '@angular/core';
import { Curso } from '../../interfaces/iCurso';
import { PagoCurso } from '../../interfaces/iPagoCurso';
import { AdministradorService } from '../administrador.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-verificar-transferencia',
  templateUrl: './verificar-transferencia.component.html',
  styleUrls: ['./verificar-transferencia.component.css']
})
export class VerificarTransferenciaComponent implements OnInit {

  /*Selectores*/
  idCurso= ""
 
/*arreglos*/
  arreglo_cursos: Curso[];
  curso: Curso = {
    id: null,
    nombre: null,
    descripcion:null,
    inicia: null,
    finaliza: null,
    precio: null, 
  };

  arreglo_pc: PagoCurso[];
  pago_curso: PagoCurso = {
    id: null,
    cedula: null,
    apellido: null,
    nombre: null,
    curso: null,
    transferencia: null,
    fecha: null,
    monto: null
  };

  constructor(private administradorService: AdministradorService, private httpClient: HttpClient) { 
    this.mostrarCursos();
  }

  ngOnInit() {
  }


   		mostrarCursos(): void {

    this.administradorService.mostrarCursos().
    subscribe(response => {
      var x = response;
      var b= JSON.stringify(x);
  
      this.arreglo_cursos= JSON.parse(x);
      console.log(this.arreglo_cursos);
    }, error => {
        alert('Ocurrio un problema al mostrar los cursos!');
        console.log(error);
    });
   }

  mostrarPagosEstudiantes(): void {

    this.administradorService.mostrarPagosEstudiantes(this.idCurso).
    subscribe(response => {
      var x = response;
      var b= JSON.stringify(x);
      this.arreglo_pc= JSON.parse(x);
      console.log(this.arreglo_pc);
    }, error => {
        alert('Ocurrio un problema al mostrar los cursos!');
        console.log(error);
    });
   }
}
