import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-menu-paciente',
  standalone: true,
  imports: [],
  templateUrl: './menu-paciente.component.html',
  styleUrl: './menu-paciente.component.css'
})
export class MenuPacienteComponent {

  email: string = '';
  
  constructor(private router: Router, private authService: AuthService) {
    this.authService.getAuthState().subscribe((usuario) => {
      if (usuario && usuario.email) {
        this.email = usuario.email;
      }
    });
  }

  signOut() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }
}