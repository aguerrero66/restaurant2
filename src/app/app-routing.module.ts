import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './modulos/principal.component';
import { DashboardComponent } from './modulos/dashboard/dashboard.component';
import { UsuariosComponent } from './modulos/usuarios/usuarios.component';

const routes: Routes = [
{path:'', component:PrincipalComponent,
  children: [
    {path:'dashboard', component:DashboardComponent},
    {path:'Usuarios', component:UsuariosComponent},
  

  ]

}


];





//cost router
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
