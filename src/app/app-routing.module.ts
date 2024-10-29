import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { SeatQuizComponent } from './seat-quiz/seat-quiz.component';

const routes: Routes = [
  {path: '', component: WelcomeScreenComponent},  // Ruta por defecto
  {path: 'quiz', component: SeatQuizComponent}, // Ruta para el Home
  {path: '**', redirectTo: ''}                 // Ruta wildcard para manejar rutas no definidas 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
