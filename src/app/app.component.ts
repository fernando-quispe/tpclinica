import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Item } from './componentes/layout/layout.component';
//import { slideInAnimation } from './route-animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'tp2clinicaonline';

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

  itemAuth: Item[] = [
    { title: 'Acceso',
      link: '/auth/login',
      active: false, 
    },
    { title: 'Empezar',
      link: '/',
      active: false, 
      children: [
        { title: 'Especialista',
          link: '/auth/altaProfesional',
          active: true,
        },
        { title: 'Paciente',
          link: '/auth/altaPaciente',
          active: false,
        },
      ],
    }
  ]
}