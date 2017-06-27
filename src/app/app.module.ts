import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { UserService } from './services/user.service';
import { AlertasService } from './services/alertas.service';

import { routing, appRoutingProviders } from './app.routing';
import { PrincipalComponent } from './principal/principal.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { ReclamacionesComponent } from './reclamaciones/reclamaciones.component';
import { FooterComponent } from './footer/footer.component';
import { AvisolegalComponent } from './avisolegal/avisolegal.component';
import { AvisocookiesComponent } from './avisocookies/avisocookies.component';
import { AlertasComponent } from './alertas/alertas.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PrincipalComponent,
    QuienessomosComponent,
    LoginComponent,
    ContactoComponent,
    BlogComponent,
    ReclamacionesComponent,
    FooterComponent,
    AvisolegalComponent,
    AvisocookiesComponent,
    AlertasComponent,
    AlertasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5W2vTbXG4NYcpYqdDvQtbro6Oc-g7xns'
    })
  ],
  providers: [ UserService, AlertasService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
