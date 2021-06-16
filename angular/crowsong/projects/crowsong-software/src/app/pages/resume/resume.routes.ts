import { Routes } from '@angular/router';
import { ResumeComponent } from './resume.component';

export const resumeRoutes: Routes = [
    { path: '', component: ResumeComponent,
        children: [
                { path: 'education', loadChildren: () => import('./sections/education/education.module').then(m => m.EducationModule) },
                { path: 'leadership', loadChildren: () => import('./sections/leadership/leadership.module').then(m => m.LeadershipModule) },
                { path: 'experience', loadChildren: () => import('./sections/experience/experience.module').then(m => m.ExperienceModule) },
                { path: 'skills', loadChildren: () => import('./sections/skills/skills.module').then(m => m.SkillsModule) },
                { path: 'print', loadChildren: () => import('../../features/print/print.module').then(m => m.PrintModule)}
        ] 
    }
]