import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AltaProfesionalesComponent } from '../../../componentes/altas/alta-profesionales/alta-profesionales.component';
import { AltaPacientesComponent } from '../../../componentes/altas/alta-pacientes/alta-pacientes.component';
import { AltaAdminComponent } from '../../../componentes/altas/alta-admin/alta-admin.component';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [NgIf, AltaProfesionalesComponent, AltaPacientesComponent, AltaAdminComponent],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})

export class RegistrarComponent {

  isClienteActive: boolean = false;
  isProfesionalActive: boolean = false;
  //isAdminActive: boolean = false;
  dataArray: { img: string; mail: string; contrasena: string }[] = [
    { img: '../../../assets/admin1.jpeg',
      mail: 'analistadetesting@gmail.com',
      contrasena: '123546',
    },
    { img: '../../../assets/admin3.jpg',
      mail: 'fernando_xxii@hotmail.com',
      contrasena: '123546',
    },
  ]
  
  constructor(private router: Router){
  }

  mostrarClienteComponent() {
    this.isClienteActive = true;
    this.isProfesionalActive = false;
    //this.isAdminActive = false;
  }

  mostrarProfesionalComponent() {
    this.isClienteActive = false;
    this.isProfesionalActive = true;
  }

  /*mostrarAdministradorComponent(){
    this.isClienteActive = false;
    //this.isProfesionalActive = true;
    this.isAdminActive = true;
  }*/

  selecte(){
    console.log('ingrese')
  }

  goBack(){
    this.router.navigate(['/auth']);
  }
}