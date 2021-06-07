import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'print-resume',
  templateUrl: './print-resume.component.html',
  styleUrls: ['./print-resume.component.scss']
})
export class PrintResumeComponent{
    @Input() email: string = '';
    @Input() name: string = '';
    @Input() subtitle: string = '';
    @Input() title: string = '';
    
    constructor() { };
};
