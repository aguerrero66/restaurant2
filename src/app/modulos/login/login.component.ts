import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario:any;
  email:any;
  clave:any;
  error=false
  user={
   Nombre:"",
   Correo:"",
   clave:"",
   Telefono:"",
   Direccion:"",
   fo_rol:0,
  

  };

  constructor(private slogin:LoginService, private router: Router){}


  ngOnInit():void{


  }

  consulta (){
    this.slogin.consultar(this.email,this.clave ).subscribe((result:any)=>{
     this.usuario=result;
     console.log(this.usuario);

     if (this.usuario[0].validar=="valida"){
    console.log ("entro");

    console.log('id', this.usuario.id_usuario);
    console.log('nombre', this.usuario.Nombre);
    console.log('correo', this.usuario.Correo);
    console.log('rol', this.usuario.fo_rol);

    

    sessionStorage.setItem('id', this.usuario.id_usuario);
    sessionStorage.setItem('Nombre', this.usuario.Nombre);
    sessionStorage.setItem('Correo', this.usuario.Correo);
    sessionStorage.setItem('rol', this.usuario.fo_rol);
    console.log(sessionStorage);
        this.router.navigate(['dashboard']);
    }else {
      console.log (" no entro");
      this.error=true;

     } 
     })



     }
      
    }
  
  


