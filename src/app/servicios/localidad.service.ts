import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocalidadService {

  url= 'http://localhost/restaurant2/src/app/PHP/Localidad/';
  constructor(private http:HttpClient){}

  consultar (){
    return this.http.get(`${this.url}consultal.php`)
  }
  insertar(articulo:any){
    return this.http.post(`${this.url}insertar.php`,JSON.stringify(articulo));
  }

  eliminar(id:number){
    return this.http.get(`${this.url}eliminar.php?id=${id}`);
  }
  edit (datos:any, id:number){
    return this.http.post(`${this.url}editar.php?id=${id}`,JSON.stringify(datos));
  }


}
