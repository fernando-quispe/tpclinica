import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

export type Item = {
  title: string;
  link: string;
  active: boolean;
  children?: Item[];
};

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})

export class LayoutComponent implements OnInit {

  @Input() items: Item[] = [];
  email: string = '';
  constructor(private afAuth: AuthService, private router: Router) {
    this.afAuth.getAuthState().subscribe((usuario) => {
      if (usuario && usuario.email) {
        this.email = usuario.email;
      }
    });   
  }
  
  ngOnInit(): void {}

  logout() {
    this.afAuth.logout().then(() => {
      this.router.navigate(['/auth']);
    });
  }
}