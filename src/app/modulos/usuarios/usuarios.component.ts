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
iduser:any;
localidad:any;
rol:any;
user ={
Nombre:"",
Telefono:"",
Correo:"",
Direccion:"",
clave:"",
fo_localidad:0,
fo_rol:0

}

// Para validar
validNombre=true;
validCorreo=true;
validclave=true;
validTelefono=true;
validDireccion=true;
validfo_rol=true;
validfo_localidad=true
//boton editar
beditar=false;




  constructor (private suser: usuarioService) {}

  ngOnInit():void{
    this.consulta();
    this.limpiar();
    this.consultalocali();
    this.consultarol();

  }

  //mostrar formulario
 mostrar (dato:any) {
    switch(dato){
    case 0:
    this.verf=false;
    this.limpiar();
    this.beditar=false;
    this.iduser="";
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
  this.user.fo_localidad=0,
  this.user.fo_rol=0


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


//consultar formulario
consulta (){
  this.suser.consultar().subscribe((result:any)=>{
   this.usuario=result;
   console.log(this.usuario);
    
  })

}

consultarol (){
  this.suser.consultarol().subscribe((result:any)=>{
   this.rol=result;
   console.log(this.usuario);
    
  })

}

consultalocali (){
  this.suser.consultalocalidad().subscribe((result:any)=>{
   this.localidad=result;
   console.log(this.usuario);
    
  })

}

//ingresar datos al formulario
ingresar(){
this.validar();

console.log (this.rol);

if(this.validNombre==true && this.validCorreo==true && this.validTelefono==true && this.validDireccion && this.validclave==true && this.validfo_localidad==true && this.validfo_rol==true) {
this.suser.insertar(this.user).subscribe((datos:any) => {
if(datos['resultado']=='OK'){

this.consulta();  

}

});

this.mostrar(0);
this.limpiar();



} else  this.alertaerror();
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

cargardatos(datos:any, id:number){

//console.log (datos);
this.user.Nombre=datos.Nombre;
this.user.Correo=datos.Correo;
this.user.clave=datos.clave;
this.user.Telefono=datos.Telefono;
this.user.Direccion=datos.Direccion;
this.user.fo_rol=datos.rol;
this.user.fo_localidad=datos.localidad
this.mostrar(1);
this.beditar=true;
this.iduser=id;


}

edita(){
  this.validar();
if(this.validNombre==true && this.validCorreo==true && this.validTelefono==true && this.validDireccion && this.validclave==true && this.validfo_localidad==true && this.validfo_rol==true ) {
this.suser.edit (this.user, this.iduser).subscribe((datos:any) => {
if(datos['resultado']=='OK'){

this.consulta();  
}

});
this.mostrar(0);



}
}








}