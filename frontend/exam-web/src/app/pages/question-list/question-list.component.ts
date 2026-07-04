import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamQuestion, ExamQuestionService } from '../../services/exam-question.service';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [],
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.scss'
})
export class QuestionListComponent implements OnInit {
  questions: ExamQuestion[] = [];

  constructor(
    private examQuestionService: ExamQuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadQuestions();
  }

  loadQuestions(): void {
    this.examQuestionService.getQuestions().subscribe({
      next: (data) => {
        this.questions = data;
      },
      error: (error) => {
        console.error('โหลดข้อมูลข้อสอบไม่สำเร็จ', error);
      }
    });
  }

  goToCreate(): void {
    this.router.navigate(['/create']);
  }

  deleteQuestion(id: number): void {
    const isConfirm = confirm('ต้องการลบข้อสอบนี้ใช่หรือไม่?');

    if (!isConfirm) {
      return;
    }

    this.examQuestionService.deleteQuestion(id).subscribe({
      next: () => {
        this.loadQuestions();
      },
      error: (error) => {
        console.error('ลบข้อสอบไม่สำเร็จ', error);
      }
    });
  }
}