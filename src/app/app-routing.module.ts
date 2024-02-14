import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';
import { LoginComponent } from './modulos/login/login.component';
import { ValidacionUserGuard } from './guards/validacionuser.guard';
import { ProductosComponent } from './modulos/productos/productos.component';
import { InicioComponent } from './modulos/inicio/inicio.component';

const routes: Routes = [
{path:'', component:PrincipalComponent,
  canActivate:[ValidacionUserGuard],
  children: [
    {path:'dashboard', component:DashboardComponent},
    {path:'Usuarios', component:UsuariosComponent},
    {path:'Productos', component:ProductosComponent},
    {path:'Inicio', component:InicioComponent},
  

  ]


},
{path: 'login', component:LoginComponent },


];





//cost router
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
