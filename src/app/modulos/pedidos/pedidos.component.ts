import { Component } from '@angular/core';
import { PedidosService } from "src/app/servicios/pedidos.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent {

  constructor(private spedidos:PedidosService){}  

ngOnInit():void {

  this.consulta();
  this.consultauser ();
  this.limpiar();


}


//variables globales
verf=false;
pedido:any;
idpedido:any;
usuario:any;


pedidos ={

id_pedido:0,
fecha_pedido:new Date(),
productos:0,
estado_del_pedido:"",
metodo_pago:"",
total:0,
fo_Usuario:0
}

// Para validar
validid_pedido=true;
validfecha_pedido=true;
validproductos=true;
validestado_del_pedido=true;
validmetodo_pago=true;
validtotal=true;
validfo_Usuario=true;



//boton editar
beditar=false;




//mostrar formulario
mostrar (dato:any) {
  switch(dato){
  case 0:
  this.verf=false;
  this.limpiar();
  this.beditar=false;
  this.idpedido="";
  break;
  case 1:
  this.verf=true;
  break
    }
  }


//limpiar formulario
  limpiar () {
    this.pedidos.id_pedido=0;
    this.pedidos.fecha_pedido=new Date ();
    this.pedidos.productos=0;
    this.pedidos.estado_del_pedido="";
    this.pedidos.metodo_pago=""; 
    this.pedidos.total=0;
    this.pedidos.fo_Usuario=0;
  
  
  }
  

//consultar formulario
consulta (){
  this.spedidos.consultar().subscribe((result:any)=>{
   this.pedido=result;
   //console.log(this.notificacion);
    
  })

}

consultauser (){
  this.spedidos.consultauser().subscribe((result:any)=>{
   this.usuario=result;
   
    
  })

}

validar (){
  if(this.pedidos.id_pedido==0 ){
    this.validid_pedido=false; 
  }else {this.validid_pedido=true
    
    }
  if(this.pedidos.fecha_pedido==new Date() ){
        this.validfecha_pedido=false; 
  }else {this.validfecha_pedido=true
        
  }
  if(this.pedidos.productos== 0 ){
          this.validproductos=false; 
  }else {this.validproductos=true
          
  }
  if(this.pedidos.estado_del_pedido== "" ){
      this.validestado_del_pedido=false; 
  }else {this.validestado_del_pedido=true
            
  }
  if(this.pedidos.metodo_pago== "" ){
    this.validmetodo_pago=false; 
  }else {this.validmetodo_pago=true
              
  } 
  
  if(this.pedidos.total== 0 ){
    this.validtotal=false; 
  }else {this.validtotal=true
              
  } 


  if(this.pedidos.fo_Usuario== 0 ){
    this.validfo_Usuario=false; 
  }else {this.validfo_Usuario=true
              
  } 

}



ingresar(){
  this.validar();
  
  
  console.log (this.pedidos);
  
  
  if(this.validfecha_pedido==true && this.validproductos==true && this.validestado_del_pedido==true && this.validmetodo_pago && this.validtotal && this.validfo_Usuario) {
  this.spedidos.insertar(this.pedidos).subscribe((datos:any) => {
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
    if(this.validid_pedido==true && this.validfecha_pedido==true && this.validproductos==true && this.validestado_del_pedido==true && this.validmetodo_pago && this.validtotal && this.validfo_Usuario)
    console.log('ID del pedido:', this.idpedido);
    console.log('Valor de id antes de la solicitud HTTP:', this.idpedido); {
      this.spedidos.edit(this.pedidos,this.idpedido).subscribe((datos:any) => {
      if(datos['resultado']=='OK') {
  if(datos['resultado']=='OK'){
  
  this.consulta();  
  }
  }
  });
  this.mostrar(0);
  
  
  
  }
  }

  borrarpedidos(id:any){
    this.spedidos.eliminar(id).subscribe((datos:any) => {
      if(datos['resultado']=='OK'){
      
      this.consulta();  
      }
  
  
  
  })
  
  }  


  preguntar (id:any, Usuario:any) {
    Swal.fire({
      title: "¿Esta seguro que quiere eliminar el pedido del  " + Usuario + "?",
      text: "¡No podrá revertir este proceso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Sí, eliminar!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.borrarpedidos (id)
  
        Swal.fire({
          title: "¡Eliminado!",
          text: " Pedido  eliminado.",
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

    this.pedidos.fecha_pedido=datos.fecha_pedido;
    this.pedidos.productos=datos.productos;
    this.pedidos.estado_del_pedido=datos.estado_del_pedido;
    this.pedidos.metodo_pago=datos.metodo_pago;
    this.pedidos.total=datos.total;
    this.pedidos.fo_Usuario=datos.fo_Usuario;
    this.mostrar(1);
    this.beditar=true;
    this.idpedido=id;
    
    
    }    




}
