import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';
import { StepComponent } from './stepper/step.component';


@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
