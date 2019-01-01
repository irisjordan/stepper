import {Component, ContentChildren, QueryList, AfterContentInit, Input } from '@angular/core';

import { StepComponent } from './step.component';

@Component({
  selector: 'stepper, [stepper]',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})

export class StepperComponent implements AfterContentInit {

	@Input('clickable') clickable: boolean;
	@Input('color') color: string;
	@Input('shape') shape: string;

	@ContentChildren(StepComponent) steps: QueryList<StepComponent>;

	stepArray: any[];
	numberOfSteps = 0;
	activeStepIndex = 0;

	ngAfterContentInit() {

		// get all active steps
		let activeSteps = this.steps.filter((step)=>step.active);

		// if there is no active step, make first step active
		if(activeSteps.length === 0) {
			this.selectStep(this.steps.first);
		}
		else {
			this.getActiveStep();
		}

		//get number of steps
		this.numberOfSteps = this.steps.length;

		//set all steps to clickable if stepper is of type clickable
		if (this.clickable) {
			this.steps.toArray().forEach(step => step.clickable = true);
		}
	}

	selectStep(step: StepComponent) {

		// deactivate all steps
		this.steps.toArray().forEach(step => step.active = false);

		// activate the step the user has clicked
		step.active = true;	

		this.getActiveStep();	
	}	

	nextStep() {

		//get current active step
		this.getActiveStep();

		//move to next step
		if (this.activeStepIndex!=this.numberOfSteps-1) {
			this.stepArray[this.activeStepIndex].active = false;
			this.stepArray[this.activeStepIndex + 1].active = true;
			this.activeStepIndex++;	
		}
	}

	previousStep() {

		//get current active step
		this.getActiveStep();

		//move to previous step
		if (this.activeStepIndex!=0) {
			this.stepArray[this.activeStepIndex].active = false;
			this.stepArray[this.activeStepIndex - 1].active = true;
			this.activeStepIndex--;	
		}
	}

	getActiveStep() {

		this.stepArray = this.steps.toArray();

		for (let i in this.stepArray) {
		   if (this.stepArray[i].active===true) {
		   		this.activeStepIndex = +i;
		   }
		}
	}

	setState(state: string) {

		let activeStep = this.steps.filter((step)=>step.active);
		
		activeStep[0].state = state;

		if (activeStep[0].clickable) {
			activeStep[0].stepStateClass = 'active clickable ' + state;
		}
		else {
			activeStep[0].stepStateClass = 'active ' + state;
		}
	}

	setClickable (clickable: boolean) {

		//get current active step
		this.getActiveStep();

		//only do this if it's not the last step
		if (clickable && this.activeStepIndex!=this.numberOfSteps-1) {
			//set current and next step to clickable
			this.stepArray[this.activeStepIndex].clickable = clickable;
			this.stepArray[this.activeStepIndex + 1].clickable = clickable;
		}
		else {
			//only set current step to non-clickable
			this.stepArray[this.activeStepIndex].clickable = clickable;
		}
	}
}
