import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  url = 'http://localhost/restaurant2/src/app/PHP/login/';
  constructor(private http: HttpClient) { }

  consultar(user:any, clave:any) {
    console.log(`${this.url}login.php?user=${user}&clave=${clave}`);
    return this.http.get(`${this.url}login.php?user=${user}&clave=${clave}`)
  }
}
