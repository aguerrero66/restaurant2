import { Component } from '@angular/core';
import { NotificacionesService } from "src/app/servicios/notificaciones.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.scss']
})
export class NotificacionesComponent {

constructor(private snotificaciones:NotificacionesService){}


ngOnInit():void {
this.consulta();
this.limpiar();
this.consultarol();
this.consultauser();


}





//variables globales

verf=false;
notificacion:any;
idnotificacion:any;
usuario:any;
rol:any


notificaciones={

id_notificacion:0,
tipo_notificacion:"",
mensaje:"",
fo_Usuario:0,
fo_rol:0

}



// Para validar
validid_notificacion=true;
validtipo_notificacion=true;
validmensaje=true;
validfo_Usuario=true;
validfo_rol=true;

//boton editar
beditar=false;


//mostrar formulario
mostrar (dato:any) {
  switch(dato){
  case 0:
  this.verf=false;
  this.limpiar();
  this.beditar=false;
  this.idnotificacion="";
  break;
  case 1:
  this.verf=true;
  break
    }
  }


 //limpiar formulario
limpiar () {
  this.notificaciones.id_notificacion=0;
  this.notificaciones.tipo_notificacion="";
  this.notificaciones.mensaje="";
  this.notificaciones.fo_Usuario=0;
  this.notificaciones.fo_rol=0; 



}






//consultar formulario
consulta (){
  this.snotificaciones.consultar().subscribe((result:any)=>{
   this.notificacion=result;
   //console.log(this.notificacion);
    
  })

}

consultarol (){
  this.snotificaciones.consultarol().subscribe((result:any)=>{
   this.rol=result;
   //console.log(this.rol);
    
  })

}

consultauser (){
  this.snotificaciones.consultauser().subscribe((result:any)=>{
   this.usuario=result;
   //console.log(this.usuario);
    
  })

}


//valiar formulario
validar (){
  if(this.notificaciones.id_notificacion==0 ){
    this.validid_notificacion=false; 
  }else {this.validid_notificacion=true
    
    }
  if(this.notificacion.tipo_notificacion=="" ){
        this.validtipo_notificacion=false; 
  }else {this.validtipo_notificacion=true
        
  }
  if(this.notificacion.mensaje== "" ){
          this.validmensaje=false; 
  }else {this.validmensaje=true
          
  }
  if(this.notificacion.fo_productos== 0 ){
      this.validfo_Usuario=false; 
  }else {this.validfo_Usuario=true
            
  }
  if(this.notificacion.fo_rol== 0 ){
    this.validfo_rol=false; 
  }else {this.validfo_rol=true
              
  }  

}

//ingresar datos al formulario
ingresar(){
  this.validar();
  
  
  console.log (this.notificaciones);
  
  
  if(this.validtipo_notificacion==true && this.validmensaje==true && this.validtipo_notificacion==true && this.validfo_Usuario&& this.validfo_rol) {
  this.snotificaciones.insertar(this.notificaciones).subscribe((datos:any) => {
  if(datos['resultado']=='OK'){
  
    
  this.consulta();  
  this.consultauser();

 
  
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


  edita(){
    this.validar();
    if(this.validid_notificacion==true && this.validtipo_notificacion==true && this.validmensaje==true && this.validfo_Usuario && this.validfo_rol) {
      this.snotificaciones.edit(this.notificaciones,this.idnotificacion).subscribe((datos:any) => {
      if(datos['resultado']=='OK') {
  if(datos['resultado']=='OK'){
  
  this.consulta();  
  }
  }
  });
  this.mostrar(0);
  
  
  
  }
  }

  borrarnotificacion(id:any){
    this.snotificaciones.eliminar(id).subscribe((datos:any) => {
      if(datos['resultado']=='OK'){
      
      this.consulta();  
      }
  
  
  
  })
  
  }  


  preguntar (id:any, fo_Usuario:any) {
    Swal.fire({
      title: "¿Esta seguro que quiere eliminar la notificacion  " + fo_Usuario + "?",
      text: "¡No podrá revertir este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrarnotificacion (id)
  
        Swal.fire({
          title: "¡Eliminado!",
          text: "Usuario eliminado.",
          icon: "success"
        });
      }
    });
  
  
  
  
  }


cargardatos(datos:any, id:number){

    console.log (datos);
    /*console.log("Tipo de notificación: ", datos.tipo_notificacion);
    console.log("ID Usuario: ", datos.fo_Usuario);
    console.log("ID Rol: ", datos.fo_rol);*/

    this.notificaciones.tipo_notificacion=datos.tipo_notificacion;
    this.notificaciones.mensaje=datos.mensaje;
    this.notificaciones.fo_Usuario=datos.fo_Usuario;
    this.notificaciones.fo_rol=datos.fo_rol;
    this.mostrar(1);
    this.beditar=true;
    this.idnotificacion=id;
    
    
    }    

}
