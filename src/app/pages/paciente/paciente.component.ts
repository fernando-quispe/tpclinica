import { Component } from '@angular/core';
import { Item, LayoutComponent } from '../../componentes/layout/layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-paciente',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})

export class PacienteComponent {

  items: Item[] = [];
  constructor() {
    this.items = [
      { title: 'Mi Perfil',
        link: 'mi-perfil',
        active: false,
      },
      { title: 'Mis Turnos',
        link: 'mis-turnos',
        active: false,
      },
      { title: 'Solicitar Turnos',
        link: 'solicitar-turno',
        active: false,
      },
    ];
  }
}