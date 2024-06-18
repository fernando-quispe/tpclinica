import { Component } from '@angular/core';
import { Item, LayoutComponent } from '../../componentes/layout/layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profesional',
  standalone: true,
  imports: [LayoutComponent, RouterOutlet],
  templateUrl: './profesional.component.html',
  styleUrl: './profesional.component.css'
})

export class ProfesionalComponent {

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