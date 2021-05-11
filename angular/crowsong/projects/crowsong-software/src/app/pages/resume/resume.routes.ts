import { Routes } from '@angular/router';

import { ResumeComponent } from './resume.component';

export const resumeRoutes: Routes = [
    { path: '', component: ResumeComponent, pathMatch: 'prefix', children: [
            { path: '', redirectTo: 'common', pathMatch: 'full'},
            { path: 'common', loadChildren: () => import('./content/common/common-information.module').then(m => m.CommonInformationModule) },
            { path: 'mean', loadChildren: () => import('./content/mean/mean.module').then(m => m.MeanModule) },
            { path: 'net', loadChildren: () => import('./content/net/net.module').then(m => m.NetModule) }
        ] 
    }
]