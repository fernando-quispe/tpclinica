import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AltaProfesionalesComponent } from '../../../componentes/altas/alta-profesionales/alta-profesionales.component';
import { AltaPacientesComponent } from '../../../componentes/altas/alta-pacientes/alta-pacientes.component';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [NgIf, AltaProfesionalesComponent, AltaPacientesComponent],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})

export class RegistrarComponent {

  isClienteActive: boolean = false;
  isProfesionalActive: boolean = false;
  dataArray: { img: string; mail: string; contrasena: string }[] = [
    { img: '../../../assets/admin1.jpeg',
      mail: 'fernandquispe.utn@gmail.com',
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
  }

  mostrarProfesionalComponent() {
    this.isClienteActive = false;
    this.isProfesionalActive = true;
  }

  selecte(){
    console.log('ingrese')
  }

  goBack(){
    this.router.navigate(['/auth']);
  }
}