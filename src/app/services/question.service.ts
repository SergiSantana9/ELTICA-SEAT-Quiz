// src/app/services/question.service.ts

import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';

import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators'; // Importamos catchError

import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Importamos HttpClient 

@Injectable({
  providedIn: 'root' // Esto hace que el servicio esté disponible en toda la aplicación
})
export class QuestionService {
    private apiUrl = '/assets/api/questions.json';

    constructor(private http: HttpClient) { }

    /**
   * Método para obtener las preguntas desde un archivo JSON.
   * Utiliza HttpClient para realizar una solicitud GET al archivo.
   * @returns Observable<Question[]> - Un observable que emite un array de preguntas.
   */
    getQuestions(): Observable<Question[]> {
      console.log('[QuizService] Fetching questions...');
      return this.http.get<Question[]>(this.apiUrl).pipe(
        tap((questions: Question[]) => {
          console.log('[QuizService] Questions fetched:', questions); // Log de las preguntas
        }),
        catchError(this.handleError) // Gestionamos el error
      );
    }
      // Método para gestionar los errores
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente o de la red
      console.error('An error occurred:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    // Devuelve un observable con un mensaje de error
    return throwError('Something went wrong; please try again later.');
  }
 
}



//tap: Este operador de RxJS se usa para ejecutar acciones secundarias (como el console.log) sin alterar el flujo de datos.
//Ahora, después de hacer la solicitud GET a la API, las preguntas son registradas en la consola usando tap, antes de que el observable sea retornado.