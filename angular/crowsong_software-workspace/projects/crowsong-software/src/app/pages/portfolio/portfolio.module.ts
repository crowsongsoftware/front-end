import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { portfolioRoutes } from './portfolio.routes';



@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(portfolioRoutes)
  ]
})
export class PortfolioModule { }
