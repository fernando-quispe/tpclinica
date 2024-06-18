import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Profesional } from '../../../interfaces/profesional';
import { ClinicaService } from '../../../services/clinica.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Item } from '../../../componentes/layout/layout.component';
import { NgFor, NgIf } from '@angular/common';
import { AltaPacientesComponent } from '../../../componentes/altas/alta-pacientes/alta-pacientes.component';
import { ProfPendientesComponent } from '../../../componentes/prof-pendientes/prof-pendientes.component';
import { AltaAdminComponent } from '../../../componentes/altas/alta-admin/alta-admin.component';
import { AltaProfesionalesComponent } from '../../../componentes/altas/alta-profesionales/alta-profesionales.component';

@Component({
  selector: 'app-seccion-usuario',
  standalone: true,
  imports: [NgFor, NgIf, AltaPacientesComponent, ProfPendientesComponent, AltaAdminComponent, AltaProfesionalesComponent],
  templateUrl: './seccion-usuario.component.html',
  styleUrl: './seccion-usuario.component.css'
})

export class SeccionUsuarioComponent implements OnInit{

  profPendientes:Profesional[] = [];
  isClienteActive: boolean = true;
  isProfesionalActive: boolean = false;
  isAdmin: boolean = false; 
  usuarios: any;
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private clinicaFire: ClinicaService, 
              private auth: AuthService, 
              private router: Router) {
  }
  
  items: Item[] = [
    { title: 'Inicio',
      link: '/',
      active: true,
    },
    { title: 'Admin',
      link: '/admin',
      active: true
    }
  ]

  logout() {
    this.auth.logout().then(() => {
      this.router.navigate(['/auth']);
    });
  }

  ngOnInit(): void {
    this.clinicaFire.getProfesionales().subscribe((data)=> {
      this.profPendientes = data;
    })
    this.clinicaFire.getUsuarios().subscribe((data)=> {
      this.usuarios = data;
    })
  }

  async onAceptarRechazar(id:string, value: string){
    await this.clinicaFire.updateProfesional(id, value);
  }
  
  mostrarClienteComponent() {
    this.isClienteActive = true;
    this.isProfesionalActive = false;
    this.isAdmin = false;
  }

  mostrarProfesionalComponent() {
    this.isClienteActive = false;
    this.isProfesionalActive = true;
    this.isAdmin = false;
  }

  mostrarAdminComponent() {
    this.isAdmin = true;
    this.isClienteActive = false;
    this.isProfesionalActive = false;
  }

  @HostListener('window:scroll', ['$event'])

  onScroll(event: Event): void {
    const container = event.target as HTMLElement;  
    // Verifica si el usuario ha llegado al final del contenedor
    if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
      // Lógica para cargar más elementos aquí
      // Puedes llamar a un método que cargue más elementos en 'profPendientes'
    }
  }

  descargarExcel(){
  }
}