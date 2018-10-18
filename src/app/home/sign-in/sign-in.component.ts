import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HomeService } from '../home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  private userForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<SignInComponent>,
    private homeService: HomeService,
      private router: Router) {

    this.userForm = new FormGroup({
      contraseña: new FormControl('', Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email])
    });
   }

  ngOnInit() {
  }

  ingresar() {

    this.homeService.loginUser(this.userForm).
      subscribe(response => {
        alert('Ingreso exitoso');
        console.log(response.user.tipo);
        localStorage.setItem('token', response.token_acceso);

        if (response.user.tipo === 1) {
          this.router.navigateByUrl('/admin');
        }

      }, error => {
          alert('Ocurrio un problema al iniciar sesion!');
          console.log(error);
      });

    this.cerrar();
  }

  cerrar() {
    this.dialogRef.close();
  }

  getErrorMessage() {
    return this.userForm.get('correo').hasError('required') ? 'Debe Ingresar Una Direccion De Correo Electronico' :
        this.userForm.get('correo').hasError('correo') ? 'Correo Invalido' :
            '';
  }
}
