import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full', },
    { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule), },
    { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule), data: {animation: 'Admin'}},
    { path: 'profesional', loadChildren: () => import('./pages/profesional/profesional.module').then((m) => m.ProfesionalModule),},
    { path: 'paciente', loadChildren: () => import('./pages/paciente/paciente.module').then(m => m.PacienteModule)}, //canActivate: [VerifiedGuard, PacienteGuard],
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutes {}