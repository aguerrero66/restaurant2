
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class perfilService {


  url = 'http://localhost/restaurant2/src/app/PHP/perfil/';


  constructor(private http: HttpClient) { }

inforperfil(idusuario:number){
  console.log(`${this.url}infoperfil.php?id=${idusuario}`)

  return this.http.get(`${this.url}infoperfil.php?id=${idusuario}`)
}

  consultar(nombre:any) {
    console.log (`${this.url}consultar.php?Nombre=${nombre}`)
    return this.http.get(`${this.url}consultar.php?nombre=${nombre}`)
  }

  consultarol() {
    return this.http.get(`${this.url}consultarol.php`);
  }

  consultalocalidad() {
    return this.http.get(`${this.url}consultalocali.php`);
  }
  edit(datos: any, id:number) {
    console.log  (`${this.url}editar.php?id=${id}`, JSON.stringify(datos))
    return this.http.post(`${this.url}editar.php?id=${id}`, JSON.stringify(datos));
  }

}
