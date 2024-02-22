import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({

providedIn:'root'
})

export class ventasService{

  url= 'http://localhost/restaurant2/src/app/PHP/Ventas/';
  constructor(private http:HttpClient){}

  consultarp (){
    return this.http.get(`${this.url}consultap.php`)
  }

  consultar (){
    return this.http.get(`${this.url}consultav.php`)
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

