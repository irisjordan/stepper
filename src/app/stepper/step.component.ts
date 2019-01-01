import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'step, [step]',
  styles: [`
    .step-content {
      padding: 24px 0;
      width: 100%;
    }
  `],
  template: `
    <div *ngIf="active" class="step-content">
      <ng-content></ng-content>
    </div>
  `
})
export class StepComponent {
  @Input('title') title: string;
  @Input('details') details: string;
  @Input() active = false;
  @Input() clickable = false;
  @Input() state = '';

  stepStateClass: String;

  ngOnInit(): void {

    switch (this.state) {
      case 'error':
        this.stepStateClass = 'error';
        break;
      case 'edit':
        this.stepStateClass = 'edit';
        break;
      case 'complete':
        this.stepStateClass = 'complete';
        break;
      default: 
        this.stepStateClass = '';
    }
  }
  
}