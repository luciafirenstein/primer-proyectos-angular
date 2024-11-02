// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './auth/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component'; // Importa el LoginComponent
import { AuthService } from './auth/auth.service'; // Importa el AuthService
import { AuthGuard } from './auth/auth.guard'; // Importa el AuthGuard
import { CocherasComponent } from './cocheras/cocheras.component'; // Importa el CocherasComponent
import { ReportesComponent } from './reportes/reportes.component';
import { PreciosComponent } from './precios/precios.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';




@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      CocherasComponent,
      ReportesComponent,
      PreciosComponent,
      
      
      
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FormsModule,
       
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  

})
export class AppModule {}
