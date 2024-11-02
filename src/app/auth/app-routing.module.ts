import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { CocherasComponent } from '../cocheras/cocheras.component'; // Asegúrate de importar el componente de cocheras
import { AuthGuard } from './auth.guard';
import { ReportesComponent } from '../reportes/reportes.component';
import { PreciosComponent } from '../precios/precios.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cocheras', component: CocherasComponent, canActivate: [AuthGuard] },
  { path: 'reportes', component: ReportesComponent },
  { path: 'precios', component: PreciosComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
