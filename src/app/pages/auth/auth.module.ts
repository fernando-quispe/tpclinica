import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentesModule } from '../../componentes/componentes.module';
import { LoginComponent } from './login/login.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';


@NgModule({
  declarations: [
    //LoginComponent,
    //BienvenidoComponent,
    //RegistrarComponent,
    //VerificarCorreoComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

    RouterModule,
    ReactiveFormsModule,
    ComponentesModule,
    FormsModule,

    LoginComponent,
    BienvenidoComponent,
    RegistrarComponent,
    VerificarCorreoComponent,
  ],
  exports: [
    CommonModule,
    AuthRoutingModule,

    RouterModule,
    ReactiveFormsModule,
    ComponentesModule,
    FormsModule,

    LoginComponent,
    BienvenidoComponent,
    RegistrarComponent,
    VerificarCorreoComponent,
  ],
})

export class AuthModule { }