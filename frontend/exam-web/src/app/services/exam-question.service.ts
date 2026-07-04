import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ExamQuestion {
  id: number;
  number: number;
  questionText: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
}

export interface CreateExamQuestionRequest {
  questionText: string;
  choice1: string;
  choice2: string;
  choice3: string;
  choice4: string;
}

@Injectable({
  providedIn: 'root'
})

export class ExamQuestionService {
  private apiUrl = `${environment.apiBaseUrl}/exam-questions`;

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<ExamQuestion[]> {
    return this.http.get<ExamQuestion[]>(this.apiUrl);
  }

  createQuestion(question: CreateExamQuestionRequest): Observable<ExamQuestion> {
    return this.http.post<ExamQuestion>(this.apiUrl, question);
  }

  deleteQuestion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}