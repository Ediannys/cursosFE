import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';


import { API_URL } from '../../env';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {


  constructor(private http: HttpClient) { }

  agregarProfesor(agregarForm: FormGroup): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/agregar_p`, agregarForm.value, httpOptions);
  }

  mostrarProfesores(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/mostrar_p`, httpOptions);   
  }

eliminarProfesor(id)
  {
     return this.http.delete(`${API_URL}/eliminar_p/`+id);
  }


  agregarCurso(agregarForm: FormGroup): Observable<any> {

    console.log(agregarForm.get('nombre').value);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/agregar_c`, agregarForm.value, httpOptions);
  }


    mostrarCursos(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .get(`${API_URL}/mostrar_c`, httpOptions);   
 
}

mostrarPagosEstudiantes(id): Observable<any> {
  const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(`${API_URL}/mostrar_pagos_c/`+id, httpOptions);   
 
}

eliminarCurso(id)
  {
     return this.http.delete(`${API_URL}/eliminar_c/`+id);
  }

  agregarCursoProfesor(objeto): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post(`${API_URL}/agregar_cp`, objeto, httpOptions);

}

}
