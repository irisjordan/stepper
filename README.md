# Stepper

## Example Image
![Stepper](src/assets/stepper.png?raw=true "Title")


## Using the stepper


* Clickable versus non-clickable stepper
    * With a clickable stepper the user can move to any step by clicking on it
    * With a non-clickable stepper the user cannot click on any step unless it's set to be clickable
	* By default the stepper is non-clickable
	* To make the stepper clickable add clickable="true"

	```
	<stepper clickable="true">
		
	</stepper> 
	```

* Stepper properties
    * You can set color and shape of the steps
    * Default shape is circle. Other shapes are tile and square

    ```
    <stepper color="#E91E63" shape="tile"> 
        
    </stepper>
    ```

    ```
    <stepper color="#E91E63" shape="square"> 
        
    </stepper>
    ```

* Setting up steps
	* Steps can have a title, details and content

	```
    <stepper> 
        <step title="Step 1 Title" details="Step 1 Details">Step 1 Content</step>
        <step title="Step 2 Title" details="Step 2 Details">Step 2 Content</step> 
        <step title="Step 3 Title" details="Step 3 Details">Step 3 Content</step>
        <step title="Step 4 Title" details="Step 4 Details">Step 4 Content</step> 
        <step title="Step 5 Title" details="Step 5 Details">Step 5 Content</step>
        <step title="Step 6 Title" details="Step 6 Details">Step 6 Content</step> 
    </stepper>
	```

* Step States
    * Steps can have a state of active, complete, edit and/or error
	* Initially the first step is active but you can set other steps to [active]="true"
	
	```
    <stepper> 
        <step title="Step 1 Title" details="Step 1 Details">Step 1 Content</step>
        <step title="Step 2 Title" details="Step 2 Details">Step 2 Content </step> 
        <step title="Step 3 Title" details="Step 3 Details" [active]="true">Step 3 Content</step>
        <step title="Step 4 Title" details="Step 4 Details" state="error">Step 4 Content</step> 
        <step title="Step 5 Title" details="Step 5 Details" state="complete">Step 5 Content</step>
        <step title="Step 6 Title" details="Step 6 Details" state="edit">Step 6 Content</step> 
    </stepper>

	```

* Change the state of the active step
	* Use setState()
	* Pass in complete, edit, or error
	
	```
	<stepper #stepper> 
      ...
    </stepper>

    <button mat-raised-button (click)="stepper.setState('complete')">Complete Active Step</button>
    <button mat-raised-button (click)="stepper.setState('edit')">Make Active Step Editable</button>
    <button mat-raised-button (click)="stepper.setState('error')">Set Active Step to Error</button>

	```

* Navigate between steps
	* Use nextStep() and previousStep()
	
	```
	<stepper #stepper> 
      ...
    </stepper>

    <button mat-raised-button color="primary" (click)="stepper.previousStep()"> &lt; Move to previous step  </button>
    <button mat-raised-button color="primary" (click)="stepper.nextStep()">  Move to next step &gt; </button>

	```

* Complete Active Step & Make It Clickable
	* Set the completed step and the next one to be clickable (because when you complete a step you want to be able to move to the next one)
	    * Use setClickable(true)
	* You can also set a step to be non-clickable. This will only apply to the current step
        * Use setClickable(false)

	```
	<stepper #stepper> 
      ...
    </stepper>

	<button mat-raised-button (click)="stepper.setClickable(true)">Make Step Clickable</button>

	```

* Multiple Actions - complete step, make it clickable and move to next step

	```
	<stepper #stepper> 
      ...
    </stepper>

	<button mat-raised-button (click)="stepper.setState('complete');stepper.setClickable(true);stepper.nextStep()">Complete Active Step & Make It Clickable & Move to next step</button>

	```


