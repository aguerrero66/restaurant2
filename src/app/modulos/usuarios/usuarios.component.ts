import { Component, OnInit } from '@angular/core';
import { usuarioService } from "src/app/servicios/usuarioService";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  templateUrl: './Usuarios.component.html',
  styleUrls: ['./Usuarios.component.scss']
})
export class UsuariosComponent {

//variables globales
verf=false;
usuario:any;
user ={
Nombre:"",
Telefono:"",
Correo:"",
Direccion:"",
clave:""

}
validNombre=true;
validCorreo=true;
validclave=true;
validTelefono=true;
validDireccion=true;




  constructor (private suser: usuarioService) {}

  ngOnInit():void{
    this.consulta();
    this.limpiar();

  }

  //mostrar formulario
 mostrar (dato:any) {
    switch(dato){
    case 0:
    this.verf=false;
    break;
    case 1:
    this.verf=true;
    break
  }


  }
//limpiar formulario
limpiar () {
  this.user.Nombre="";
  this.user.Correo="";
  this.user.clave="";
  this.user.Telefono="";
  this.user.Correo="";
  this.user.Direccion="";


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


}


//consultar formulario
consulta (){
  this.suser.consultar().subscribe((result:any)=>{
   this.usuario=result;
   console.log(this.usuario);
    
  })

}


//ingresar datos al formulario
ingresar (){
this.validar();

if(this.validNombre==true && this.validCorreo==true && this.validTelefono==true && this.validDireccion && this.validclave==true ) {
this.suser.insertar(this.user).subscribe((datos:any) => {
if(datos['resultado']=='OK'){

this.consulta();  
}

});
this.mostrar(0);
this.limpiar();



} else  alert (this.alertaerror());
}

alertaerror(){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "La información no esta completa!",
  });
  
}

preguntar (id:any, Nombre:any) {
  Swal.fire({
    title: "¿Esta seguro que quiere eliminar el usuario  " + Nombre + "?",
    text: "¡No podrá revertir este proceso!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "¡Sí, eliminar!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.borraruser (id)

      Swal.fire({
        title: "¡Eliminado!",
        text: "Usuario eliminado.",
        icon: "success"
      });
    }
  });




}

borraruser(id:any){
  this.suser.eliminar(id).subscribe((datos:any) => {
    if(datos['resultado']=='OK'){
    
    this.consulta();  
    }



})

}
}