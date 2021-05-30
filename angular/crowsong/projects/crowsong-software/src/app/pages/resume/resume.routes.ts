import { Routes } from '@angular/router';

import { ResumeComponent } from './resume.component';

export const resumeRoutes: Routes = [
    { path: '', component: ResumeComponent,
        children: [
                { path: 'education', loadChildren: () => import('./content/education/education.module').then(m => m.EducationModule) },
                { path: 'leadership', loadChildren: () => import('./content/leadership/leadership.module').then(m => m.LeadershipModule) },
                { path: 'experience', loadChildren: () => import('./content/experience/experience.module').then(m => m.ExperienceModule) },
                { path: 'skills', loadChildren: () => import('./content/skills/skills.module').then(m => m.SkillsModule) }
        ] 
    }
]