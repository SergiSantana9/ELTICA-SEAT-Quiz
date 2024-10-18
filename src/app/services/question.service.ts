// src/app/services/question.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../models/question.model';

import { HttpClient } from '@angular/common/http'; // Importamos HttpClient 

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
        return this.http.get<Question[]>(this.apiUrl);
      }

 
}