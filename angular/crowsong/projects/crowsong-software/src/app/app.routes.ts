import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
    { path: 'color-palette', loadChildren: () => import('./pages/color-palette/color-palette.module').then(m => m.ColorPaletteModule)},
    { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)},
    { path: 'cover-letter', loadChildren: () => import('./pages/introduction/introduction.module').then(m => m.CoverLetterModule)},
    { path: 'portfolio', loadChildren: () => import('./pages/portfolio/portfolio.module').then(m => m.PortfolioModule)},
    { path: 'resume', loadChildren: () => import('./pages/resume/resume.module').then(m => m.ResumeModule)},
    { path: '**', redirectTo: 'page-not-found', pathMatch: 'full'},
    { path: 'page-not-found', loadChildren: () => import('./pages/error/error.module').then(m => m.ErrorModule)}
]