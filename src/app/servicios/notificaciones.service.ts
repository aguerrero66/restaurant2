import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  url='http://localhost/restaurant2/src/app/PHP/Notificacion/';

  constructor(private http:HttpClient) {}

  consultar (){
    return this.http.get(`${this.url}consultan.php`)
  }

  consultarol (){
    return this.http.get(`${this.url}consultar.php`)
  }

  consultauser (){
    return this.http.get(`${this.url}consultau.php`)
  }

  insertar(articulo:any){
    return this.http.post(`${this.url}insertar.php`,JSON.stringify(articulo));
  }

  eliminar(id:number){
    return this.http.get(`${this.url}eliminar.php?id=${id}`);
  }
  edit (datos:any, id:number){
    console.log (`${this.url}editar.php?id=${id}`,JSON.stringify(datos));
    return this.http.post(`${this.url}editar.php?id=${id}`,JSON.stringify(datos));
  }


}
