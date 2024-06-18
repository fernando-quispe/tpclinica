import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'bienvenido', component: BienvenidoComponent, data: {animation: 'Bienvenido'}},
  { path: 'login', component: LoginComponent, data: {animation: 'Login'}},
  { path: 'registrar', component: RegistrarComponent, },
  { path: 'verificarCorreo', component: VerificarCorreoComponent, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
