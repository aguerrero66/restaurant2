import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { usuarioService } from 'src/app/servicios/usuarioService';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

// variables globales
verf=false;
  usuario:any;
  email:any;
  clave:any;
  localidad:any;
  error=false
  user={
   Nombre:"",
   Correo:"",
   clave:"",
   Telefono:"",
   Direccion:"",
   fo_rol:0,
   fo_localidad:0,
  

  };


  // Para validar
validNombre=true;
validCorreo=true;
validclave=true;
validTelefono=true;
validDireccion=true;
validfo_rol=true;
validfo_localidad=true;
//boton editar
beditar=false;


//mostrar formulario
mostrar (dato:any) {
  switch(dato){
  case 0:
  this.verf=false;
  this.limpiar();
  break;
  case 1:
  this.verf=true;
  break
    }
  }


  constructor(private slogin:LoginService, private router: Router, private suser:usuarioService){}


  ngOnInit():void{

    this.consultalocali();


  }

  consulta (){
    this.slogin.consultar(this.email,this.clave ).subscribe((result:any)=>{
     this.usuario=result;
     console.log(this.usuario);

     if (this.usuario[0].validar == "valida"){
    console.log ("entro");

    console.log('id', this.usuario.id_usuario);
    console.log('nombre', this.usuario.Nombre);
    console.log('correo', this.usuario.Correo);
    console.log('rol', this.usuario.fo_rol);
    console.log('clave', this.usuario.clave);

    

    sessionStorage.setItem('id', this.usuario.id_usuario);
    sessionStorage.setItem('Nombre', this.usuario.Nombre);
    sessionStorage.setItem('Correo', this.usuario.Correo);
    sessionStorage.setItem('rol', this.usuario.fo_rol);
    console.log(sessionStorage);
        this.router.navigate(['Inicio']);
    }else {
      console.log ("no entro");
      this.error=true;

     } 
     })



     }

     //valiar formulario
validar (){
  if(this.user.Nombre== "" ){
    this.validNombre=false; 
  }else {this.validNombre=true
    
    }
  if(this.user.Correo== "" ){
        this.validCorreo=false; 
  }else {this.validCorreo=true
        
  }
  if(this.user.Direccion== "" ){
          this.validDireccion=false; 
  }else {this.validDireccion=true
          
  }
  if(this.user.clave== "" ){
      this.validclave=false; 
  }else {this.validclave=true
            
  }
  if(this.user.Telefono== "" ){
    this.validTelefono=false; 
  }else {this.validTelefono=true
              
  }  
  
  if(this.user.fo_rol== 0 ){
    this.validfo_rol=false; 
  }else {this.validfo_rol=true
              
  }   
  
  if(this.user.fo_localidad== 0 ){
    this.validfo_localidad=false; 
  }else {this.validfo_localidad=true
              
  }    
  
  
  
  }

  consultalocali (){
    this.suser.consultalocalidad().subscribe((result:any)=>{
     this.localidad=result;
     //console.log(this.usuario);
      
    })
  
  }


     ingresar(){
      this.validar();
      
      console.log (this.user);
      console.log (this.validfo_localidad);
    if(this.validNombre==true && this.validCorreo==true && this.validTelefono==true && this.validDireccion && this.validclave==true && this.validfo_localidad==true) {
    this.suser.insertarlogin(this.user).subscribe((datos:any) => {
    if(datos['resultado']=='OK'){
      
        
      this.consulta();  
      this.consultalocali();
      }
      
      });

      this.mostrar(0);
      
      this.limpiar();

      this.verf=true;

      Swal.fire({
        title: "Usuario registrado!",
        text: "Disfruta de la aventura!",
        icon: "success"
      });
      
      
      
      } else  this.alertaerror();
      }
      
    alertaerror(){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "La información no esta completa!",
        });
        
      } 

    //limpiar formulario
limpiar () {
  this.user.Nombre="";
  this.user.Correo="";
  this.user.clave="";
  this.user.Telefono="";
  this.user.Correo="";
  this.user.Direccion="";
  this.user.fo_localidad=0,
  this.user.fo_rol=0


}  
      
    }
  
  


