import { Routes } from '@angular/router';
import { QuestionListComponent } from './pages/question-list/question-list.component';
import { QuestionCreateComponent } from './pages/question-create/question-create.component';

export const routes: Routes = [
    {
        path: '',
        component: QuestionListComponent
    },
    {
        path: 'create',
        component: QuestionCreateComponent
    }
];
