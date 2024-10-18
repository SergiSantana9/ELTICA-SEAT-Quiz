import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { SeatQuizComponent } from './seat-quiz/seat-quiz.component';

const routes: Routes = [
  {path: '', component: SplashScreenComponent},  // Ruta por defecto
  {path: 'quiz', component: SeatQuizComponent}, // Ruta para el Home
  {path: '**', redirectTo: ''}                 // Ruta wildcard para manejar rutas no definidas 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
