import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Question } from '../models/question.model';


@Component({
  selector: 'app-seat-quiz',
  templateUrl: './seat-quiz.component.html',
  styleUrls: ['./seat-quiz.component.css']
})

export class SeatQuizComponent implements OnInit {

  quizTitle = "¡Desafía tus conocimientos sobre SEAT S.A!";

  questions: Question[] = []; // Array para almacenar las preguntas
  currentQuestionIndex: number = 0; // Índice de la pregunta actual
  selectedOption: number | null = null; // Opción seleccionada por el usuario
  selectedOptions: number[] = [];  // Almacena todas las opciones seleccionadas por el usuario
  score: number = 0; // Puntuación del usuario
  quizCompleted: boolean = false; // Estado para saber si el cuestionario ha terminado
  option: any;

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    // Al inicializar el componente, obtenemos las preguntas desde el servicio
    this.questionService.getQuestions().subscribe((data: Question[]) => {
      this.questions = data;
    });
  }

  // Método para avanzar a la siguiente pregunta
  nextQuestion(): void {
    if (this.selectedOption !== null) {
      // Verificamos si la opción seleccionada es la correcta
      if (this.selectedOption === this.questions[this.currentQuestionIndex].correctAnswer) {
        this.score++; // Incrementamos la puntuación si es correcta
      }

      // Reseteamos la opción seleccionada
      this.selectedOption = null;

      // Avanzamos al siguiente índice
      this.currentQuestionIndex++;

      // Verificamos si hemos llegado al final del cuestionario
      if (this.currentQuestionIndex >= this.questions.length) {
        this.quizCompleted = true;
      }
    } else {
      alert('Por favor, selecciona una opción antes de continuar.');
    }
  }

    // Método para seleccionar una opción
    selectOption(index: number): void {
      this.selectedOption = index;
      this.selectedOptions[this.currentQuestionIndex] = index;  // Guardar la selección por pregunta
    }

    // Método para retroceder a la pregunta anterior
    previousQuestion(): void {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
        this.selectedOption = this.selectedOptions[this.currentQuestionIndex];  // Cargar la opción seleccionada previamente
      }
    }

  // Método para reiniciar el cuestionario
  restartQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedOption = null;
    this.score = 0;
    this.quizCompleted = false;
  }
}