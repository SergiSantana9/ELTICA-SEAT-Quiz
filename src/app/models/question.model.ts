// src/app/models/question.model.ts

export interface Question {
    id: number; // Identificador único de la pregunta
    text: string; // Texto de la pregunta
    options: string[]; // Array de opciones de respuesta
    correctAnswer: number; // Índice de la respuesta correcta en el array de opciones
} 