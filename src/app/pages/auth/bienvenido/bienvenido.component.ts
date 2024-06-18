import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  standalone: true,
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})

export class BienvenidoComponent {

  constructor(private route: ActivatedRoute,
    private router: Router) { 
  } 

  acceder() {
    this.router.navigateByUrl('/auth/login')
  }

  registrar() {
    this.router.navigateByUrl('auth/registrar')
  }
}