import { Component, Input, OnInit, OnDestroy, ComponentRef } from '@angular/core';
import { IntroductionComponent } from '../../pages/introduction/introduction.component';

@Component({
  selector: 'print-page',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit, OnDestroy {
  //private introductionComponentRef:ComponentRef<IntroductionComponent>;
  
  @Input() title: string = '';
  @Input() sections: Array<any> = [];

  constructor() { 
    //this.introductionComponentRef = introductionComponentFactory.create();
    //helloComponentRef:ComponentRef = helloComponentFactory.create();
  //view: ViewRef = helloComponentRef.hostView;
  }

  ngOnInit(): void {
    console.log("Initializing PrintComponent");
  }

  ngOnDestroy(): void{
    console.log("Destroying PrintComponent");
  };

};
