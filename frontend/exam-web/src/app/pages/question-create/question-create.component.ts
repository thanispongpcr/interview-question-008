import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { ExamQuestion, ExamQuestionService } from '../../services/exam-question.service';
import { CreateExamQuestionRequest, ExamQuestionService } from '../../services/exam-question.service';

@Component({
  selector: 'app-question-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './question-create.component.html',
  styleUrl: './question-create.component.scss'
})
export class QuestionCreateComponent {
  question: CreateExamQuestionRequest = {
    questionText: '',
    choice1: '',
    choice2: '',
    choice3: '',
    choice4: ''
  }
  constructor(
    private examQuestionService: ExamQuestionService,
    private router: Router
  ) { }

  save(): void {
    if (
      !this.question.questionText.trim() ||
      !this.question.choice1.trim() ||
      !this.question.choice2.trim() ||
      !this.question.choice3.trim() ||
      !this.question.choice4.trim()
    ) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }

    this.examQuestionService.createQuestion(this.question).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('บันทึกข้อสอบไม่สำเร็จ', error);
        alert('บันทึกข้อสอบไม่สำเร็จ');
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}