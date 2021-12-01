import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { SkillsService } from './skills.service';
//import { SkillsStore } from './skills.store';
import { SkillsComponent } from './skills.component';

@NgModule({
    declarations: [ SkillsComponent ],
    imports: [ CommonModule ],
    exports: [ SkillsComponent ]
})
export class SkillsModule { }
