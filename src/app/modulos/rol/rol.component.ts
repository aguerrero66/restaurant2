import { Component } from '@angular/core';
import {RolService } from "src/app/servicios/rol.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.scss']
})
export class RolComponent {

  constructor (private srol: RolService) {}
 
// variables globales

rol : any;
verf=false;
idrol:any;
roles ={
id_rol:0,
nombre:"",
codigo:""
}

//validar información
validid_rol=true;
validnombre=true;
validcodigo=true;

//boton editar 
beditar=false;


ngOnInit (){
  this.consulta()
  
  }

//mostrar formulario 


mostrar (dato:any)
{ switch (dato){
case 0:
this.verf=false;
this.limpiar();
this.beditar=false;
this.idrol="";
break;
case 1:
this.verf=true;
break


}

}





//consultar rol

consulta (){
this.srol.consultar().subscribe((result:any)=>{

this.rol=result;
console.log (this.rol);

})

}

//valiar formulario
validar (){
  if(this.roles.id_rol==0 ){
    this.validid_rol=false; 
  }else {this.validid_rol=true
    
    }

    if(this.roles.nombre=="" ){
      this.validnombre=false; 
    }else {this.validnombre=true  

}

if(this.roles.codigo=="" ){
  this.validcodigo=false; 
}else {this.validcodigo=true 


}
}

//ingresar datos al formulario
ingresar(){
  this.validar();
  
  console.log (this.roles);
  
  if(this.validnombre==true && this.validcodigo==true) {
  this.srol.insertar(this.roles).subscribe((datos:any) => {
  if(datos['resultado']=='OK'){
  
    
  this.consulta();  
  
 
  
  }
  
  });
  
  this.mostrar(0);
  this.limpiar();
  
  
  
  } else  this.alertaerror();
  }

 //alerta error 
 alertaerror(){
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "La información no esta completa!",
  });
  
}
//limpiar

limpiar (){
this.roles.nombre="";
this.roles.codigo="";



}


 //borrar rol

 borrarrol(id:any){
  this.srol.eliminar(id).subscribe((datos:any) => {
    if(datos['resultado']=='OK'){
    
    this.consulta();  
    }



})

}  


preguntar (id:any, codigo:any) {
  Swal.fire({
    title: "¿Esta seguro que quiere eliminar este rol " + codigo + "?",
    text: "¡No podrá revertir este proceso!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "¡Sí, eliminar!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.borrarrol (id)

      Swal.fire({
        title: "¡Eliminado!",
        text: "Rol eliminado.",
        icon: "success"
      });
    }
  });




}

cargardatos(datos:any, id:number){

  console.log (datos);
  this.roles.nombre=datos.nombre;
  this.roles.codigo=datos.codigo;
  this.mostrar(1);
  this.beditar=true;
  this.idrol=id;
  
  
  }  

 // editar información
 edita(){
  this.validar();
  if(this.validnombre==true && this.validcodigo==true) {
  this.srol.edit (this.roles, this.idrol).subscribe((datos:any) => {
  if(datos['resultado']=='OK'){
    
    this.consulta();  
    }
    
    });
    this.mostrar(0);
    
    
    
    }
    }





}
