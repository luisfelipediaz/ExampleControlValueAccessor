import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dateSelected: Date;
  dateSelected2: Date;

  dateSelected3: FormControl = new FormControl('', Validators.required);
  dateSelected3_1: FormControl;

  testDateGroup: FormGroup;
  testDateGroupCustomValidation: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dateSelected3_1 = fb.control('', Validators.required);

    this.testDateGroup = fb.group({
      dateSelected4: ['', Validators.required]
    });

    this.testDateGroupCustomValidation = fb.group({
      dateSelected5: ['', noPipeBirtdayMonth]
    });
  }

  testDebugger(obj: any) {
    debugger;
  }
}


export function noPipeBirtdayMonth(control: AbstractControl): ValidationErrors {
  if (!(control.value instanceof Date)
    ||
    (control.value as Date).getMonth() !== 3) {
    return { 'noPipeBirtdayMonth': true };
  } else {
    return null;
  }
}
