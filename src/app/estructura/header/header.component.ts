import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  roles: number = 0;
  menuDesplegado= false;

  constructor (private router:Router) {}

  ngOnInit():void{


    const rolString = sessionStorage.getItem('rol');
    this.roles = rolString ? parseInt(rolString) : 0;
   

  


  }
 cerrar () {
   sessionStorage.removeItem ('id');
   sessionStorage.removeItem ('Nombre');
   sessionStorage.removeItem ('Correo');
   this.router.navigate(['login']);

 } 


 mostrarProductos() {
  console.log("rol")
  return sessionStorage.getItem('rol') === '1';
}
mostrarUsuarios() {
  return sessionStorage.getItem('rol') === '1';
}
mostrarDashboard() {
  return sessionStorage.getItem('rol') === '1';
}
mostrarCompras() {
  return sessionStorage.getItem('rol') === '1';
}
mostrarVentas() {
  return sessionStorage.getItem('rol') === '1';
}


//if (sessionStorage.getItem('rol') === '1' || sessionStorage.getItem('rol') === '3') {
  // Hacer algo si el valor es '1' o '3'
  //console.log('El valor de "rol" es 1 o 3.');
//} else {
  // Hacer algo si el valor no es '1' ni '3'
  //console.log('El valor de "rol" no es 1 ni 3.');
//}




  toggleMenu() {
    this.menuDesplegado = !this.menuDesplegado;
  }





}