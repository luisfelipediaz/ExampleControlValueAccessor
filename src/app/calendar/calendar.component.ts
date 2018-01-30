import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    }
  ]
})
export class CalendarComponent implements ControlValueAccessor {

  dateSelected: Date;
  isDisabled: boolean;

  onChange = (dateSelected: Date) => { };

  onTouched = () => { };

  constructor() { }

  writeValue(obj: any): void {
    if (obj instanceof Date) {
      this.dateSelected = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  changeInputDate(obj: any) {
    if (!!obj && !!obj.target && !!obj.target.value) {
      this.onChange(new Date(obj.target.value));
    } else {
      this.onChange(undefined);
    }
  }

}
