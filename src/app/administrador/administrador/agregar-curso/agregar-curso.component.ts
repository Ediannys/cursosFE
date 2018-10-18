import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-agregar-curso',
  templateUrl: './agregar-curso.component.html',
  styleUrls: ['./agregar-curso.component.css']
})
export class AgregarCursoComponent implements OnInit {

  private cursoForm: FormGroup;

  constructor(private administradorService: AdministradorService) {

    this.cursoForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      inicia: new FormControl('', Validators.required),
      finaliza: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  agregarCurso(): void {

    console.log(this.cursoForm.value);

    this.administradorService.agregarCurso(this.cursoForm).
    subscribe(response => {
      alert('Registro Exitoso!');
      console.log(response);
    }, error => {
        alert('Ocurrio un problema al agregar el curso!');
        console.log(error);
    });
  }
}
