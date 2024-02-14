import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class usuarioService {

  url = 'http://localhost/restaurant2/src/app/PHP/Usuario/';
  constructor(private http: HttpClient) { }

  consultar() {
    return this.http.get(`${this.url}consulta.php`);
  }

  consultarol() {
    return this.http.get(`${this.url}consultarol.php`);
  }

  consultalocalidad() {
    return this.http.get(`${this.url}consultalocali.php`);
  }

  insertar(articulo: any) {
    return this.http.post(`${this.url}insertar.php`, JSON.stringify(articulo));
  }

  eliminar(id: number) {

    return this.http.get(`${this.url}eliminar.php?id=${id}`);
  }
  edit(datos: any, id:number) {
    return this.http.post(`${this.url}editar.php?id=${id}`, JSON.stringify(datos));
  }
}
