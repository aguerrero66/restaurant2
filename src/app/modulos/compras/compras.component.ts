import { Component } from '@angular/core';
import { ComprasService } from "src/app/servicios/compras.service";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent {


// variables globales


verf=false;
buy:any;
idcompra:any;
Materia_prima:any;


compra={

  fecha_compra: new Date () ,
  productos_comprados:0,
  Materia_prima:"",
  total_compra:0,
  metodo_pago:"",
  Empresa:""
  
}



// Para validar
validfecha_compra=true;
validproductos_comprados=true;
validMateria_prima=true;
validtotal_compra=true;
validmetodo_pago=true;
validEmpresa=true;



//boton editar
beditar=false;


constructor(private scompras: ComprasService) {}


ngOnInit():void{
  this.consulta();
 
}

//mostrar formulario
mostrar (dato:any) {
  switch(dato){
  case 0:
  this.verf=false;
  this.limpiar();
  this.beditar=false;
  this.idcompra="";
  break;
  case 1:
  this.verf=true;
  break
}

}

//limpiar formulario
limpiar () {
  this.compra.fecha_compra=new Date();
  this.compra.productos_comprados=0;
  this.compra.Materia_prima="";
  this.compra.total_compra=0;
  this.compra.metodo_pago="";
  this.compra.Empresa="";
 
}


  
  
  //consultar formulario
  consulta (){
    this.scompras.consultar().subscribe((result:any)=>{
     this.buy=result;
     console.log(this.buy);
      
    })
  
  }

  //validar productos

validar (){
  if(this.compra.fecha_compra== new Date){
    this.validfecha_compra=false; 
  }else {this.validfecha_compra=true
    
    }
  if(this.compra.productos_comprados==0 ){
        this.validproductos_comprados=false; 
  }else {this.validproductos_comprados=true
        
  }

  if(this.compra.Materia_prima=="" ){
    this.validMateria_prima=false; 
}else {this.validMateria_prima=true
    
}

  if(this.compra.total_compra==0 ){
          this.validtotal_compra=false; 
  }else {this.validtotal_compra=true

}if(this.compra.metodo_pago=="" ){
      this.validmetodo_pago=false; 
}else {this.validmetodo_pago=true
    

  }
  if(this.compra.Empresa=="" ){
      this.validEmpresa=false; 
  }else {this.validEmpresa=true
            
  }

  
  }

// ingresar compras

ingresar(){
  this.validar();
  

  
  if(this.validfecha_compra==true && this.validproductos_comprados==true && this.validMateria_prima==true && this.validtotal_compra==true && this.validmetodo_pago==true && this.validEmpresa==true ) {
  this.scompras.insertar(this.compra).subscribe((datos:any) => {
  if(datos['resultado']=='OK'){
  
  this.consulta();  
  
  }
  
  });
  
  this.mostrar(0);
  this.limpiar();
  
  
  
  } else "información Incompleta";
  }

 //Editar 
 
 
 edita(){
  this.validar();
  if(this.validfecha_compra==true && this.validproductos_comprados==true && this.validMateria_prima==true && this.validtotal_compra==true && this.validmetodo_pago==true && this.validEmpresa==true) {
  this.scompras.edit (this.compra, this.idcompra).subscribe((datos:any) => {
  if(datos['resultado']=='OK'){
    
    this.consulta();  
    }
    
    });
    this.mostrar(0);
    
    
    
    }
    }


//borrar datos
borrarcompra(id:any){
  this.scompras.eliminar(id).subscribe((datos:any) => {
    if(datos['resultado']=='OK'){
    
    this.consulta();  
    }



})

} 




//preguntar
  preguntar (id:any, Materia_prima:any) {
      Swal.fire({
        title: "¿Esta seguro que quiere eliminar el producto  " + Materia_prima + "?",
        text: "¡No podrá revertir este proceso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.borrarcompra (id)
    
          Swal.fire({
            title: "¡Eliminado!",
            text: "Producto eliminado.",
            icon: "success"
          });
        }
      });
    
  
  
  
   
    
  
    }    
    borrarproduct(id:any){
      this.scompras.eliminar(id).subscribe((datos:any) => {
        if(datos['resultado']=='OK'){
        
        this.consulta();  
        }
    
    
    
    })
    
  }
 //cargar datos 
 cargardatos(datos:any, id:number){

  //console.log (datos);
  this.compra.fecha_compra=datos.fecha_compra;
  this.compra.productos_comprados=datos.productos_comprados;
  this.compra.Materia_prima=datos.Materia_prima;
  this.compra.total_compra=datos.total_compra;
  this.compra.metodo_pago=datos.metodo_pago;
  this.compra.Empresa=datos.Empresa;
  this.mostrar(1);
  this.beditar=true;
  this.idcompra=id;
  
  
  } 








}
