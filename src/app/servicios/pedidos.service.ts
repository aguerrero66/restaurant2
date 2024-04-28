import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  url='http://localhost/restaurant2/src/app/PHP/Pedido/'

  constructor(private http:HttpClient) {}

inforperfil(idusuario:number){
  //console.log(`${this.url}infoperfil.php?id=${idusuario}`)
  return this.http.get(`${this.url}infoperfil.php?id=${idusuario}`)
  }
  

  consultar (){
    return this.http.get(`${this.url}consultad.php`)
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
    return this.http.post(`${this.url}editar.php?id=${id}`,JSON.stringify(datos));
  }

}
