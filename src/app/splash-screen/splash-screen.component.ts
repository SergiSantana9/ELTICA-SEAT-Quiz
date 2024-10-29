import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent {


  @Output() startQuiz = new EventEmitter<void>(); // Emisor de eventos


  // Textos
  welcomeQuestion = "¿Cuanto sabes sobre tu SEAT León?"
  welcomeAction = "¡Te invitamos a comprobarlo con un questionario!"
  welcomeButton = "Empezar!"
  welcomeDisclaimer = "Los que acierten todas las preguntas recibiran un premio!"

  // Variable para controlar la visibilidad del contenido
  showContent: boolean = true;
  constructor(private router: Router) { }

  navigateToQuiz() {
    // Ocultar el contenido estableciendo showContent a false
    //this.router.navigate(['/quiz']);
    this.startQuiz.emit(); // Emitir el evento al componente padre
    console.log('[WelcomeScreen] Navigate to Quiz');
  }

  

}
console.log('[SplashScreen] Component Init');
