import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdministradorService } from '../administrador.service';

@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.component.html',
  styleUrls: ['./agregar-profesor.component.css']
})
export class AgregarProfesorComponent implements OnInit {

  private profesorForm: FormGroup;

  constructor(private administradorService: AdministradorService) {

    this.profesorForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      cedula: new FormControl('', Validators.required),
      contraseña: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.profesorForm.get('correo').hasError('required') ? 'Debe Ingresar Una Direccion De Correo Electronico' :
        this.profesorForm.get('correo').hasError('correo') ? 'Correo Invalido' :
            '';
  }

  agregarProfesor(): void {

    this.administradorService.agregarProfesor(this.profesorForm).
    subscribe(response => {
      alert('Registro Exitoso!');
      console.log(response);
      localStorage.setItem('token', response.token_acceso);
    }, error => {
        alert('Ocurrio un problema al registrar profesor!');
        console.log(error);
    });
  }

    mostrarProfesores(): void {

    this.administradorService.mostrarProfesores().
    subscribe(response => {
      alert(' Mostrar Exitoso!');
      console.log(response);
    }, error => {
        alert('Ocurrio un problema al registrar profesor!');
        console.log(error);
    });
  }
}
