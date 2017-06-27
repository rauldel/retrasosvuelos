import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PrincipalComponent } from './principal/principal.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReclamacionesComponent } from './reclamaciones/reclamaciones.component';
import { AvisolegalComponent } from './avisolegal/avisolegal.component';
import { AvisocookiesComponent } from './avisocookies/avisocookies.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/principal', pathMatch: 'full' },
    { path: 'principal', component: PrincipalComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'quienessomos', component: QuienessomosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'reclamaciones', component: ReclamacionesComponent },
    { path: 'avisolegal', component: AvisolegalComponent },
    { path: 'avisocookies', component: AvisocookiesComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);