import { Component } from '@angular/core';
import { Item, LayoutComponent } from '../../componentes/layout/layout.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})

export class AdminComponent {

  items: Item[] = [];
  constructor() {
    this.items = [
      { title: 'Inicio',
        link: 'inicio',
        active: false,
      },
      { title: 'Mi Perfil',
        link: 'mi-perfil',
        active: false,
      },
      { title: 'Turnos',
        link: 'mis-turnos',
        active: false,
      },
      { title: 'Solicitar Turnos',
        link: 'solicitar-turno',
        active: false,
      },
      { title: 'Seccion Paciente',
        link: 'seccion-paciente',
        active: false,
      },
    ];
  }
}