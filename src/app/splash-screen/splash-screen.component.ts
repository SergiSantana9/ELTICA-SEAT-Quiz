import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.css']
})
export class SplashScreenComponent {

  @Output() startQuiz = new EventEmitter<void>(); // Emisor de eventos

  // Textos
  splashQuestion = "¿Cuanto sabes sobre tu SEAT León?"
  splashAction = "¡Te invitamos a comprobarlo con un questionario!"
  splashButton = "Empezar!"
  splashDisclaimer = "Los que acierten todas las preguntas recibiran un premio!"

  // Variable para controlar la visibilidad del contenido
  showContent: boolean = true;

  constructor(private router: Router) { }

  navigateToQuiz() {
    // Ocultar el contenido estableciendo showContent a false
    //this.router.navigate(['/quiz']);
    this.startQuiz.emit(); // Emitir el evento al componente padre
    console.log('[SplashScreen] Navigate to Quiz');
  }

  testFunction() {
    console.log('Función de prueba ejecutada');
  }
}