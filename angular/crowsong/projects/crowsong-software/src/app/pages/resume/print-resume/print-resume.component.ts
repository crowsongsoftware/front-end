import { Component, Input } from '@angular/core';

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
