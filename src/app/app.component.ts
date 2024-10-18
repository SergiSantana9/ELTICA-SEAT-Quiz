import { Component } from '@angular/core';

@Component({
  //standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showSplash = true; // Estado inicial para mostrar la splash screen
  title = 'SEAT QUIZ App';
  question = "How much you know about your SEAT Ibiza?";
  splashbutton = "Let's Quiz!"
  mensajeVisible = false;

  mostrarMensaje() {
    this.mensajeVisible = true;
  }

    // Método para iniciar el quiz
    onStartQuiz() {
      this.showSplash = false; // Ocultar la splash screen y mostrar el quiz
    }
}
