import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input type date', () => {
    const inputDate: DebugElement = fixture.debugElement.query(By.css('input[type="date"]'));

    expect(inputDate).toBeTruthy();
  });

  it('should "writeValue" set value to "dateSelected" if parameter is instance of date', () => {
    const expectedDate = new Date();
    component.writeValue(expectedDate);

    expect(component.dateSelected).toBe(expectedDate);
  });

  it('should "writeValue" NOT set value to "dateSelected" if parameter not is instance of date', () => {
    const expectedDate = new Date();
    component.dateSelected = expectedDate;
    component.writeValue('test');

    expect(component.dateSelected).toBe(expectedDate);
  });

  it('should "writeValue" ignore write if "obj" is not defined', () => {
    const expectedDate = new Date();
    component.dateSelected = expectedDate;
    component.writeValue(undefined);

    expect(component.dateSelected).toBe(expectedDate);
  });

  it('should "registerOnChange" change value of "onChange"', () => {
    component.registerOnChange('test');

    expect(component.onChange).toBe('test');
  });

  it('should "registerOnTouched" change value of "onTouched"', () => {
    component.registerOnTouched('test');

    expect(component.onTouched).toBe('test');
  });

  it('should "setDisabledState" change value of "isDisabled"', () => {
    component.setDisabledState(true);

    expect(component.isDisabled).toBeTruthy();
  });

  it('should "changeInputDate" call "onChange" with value when obj, obj.target and obj.target.value its defined', () => {
    spyOn(component, 'onChange');

    const dateExpected: Date = new Date('2017-01-01');

    component.changeInputDate({ target: { value: '2017-01-01' } });

    expect(component.onChange).toHaveBeenCalledWith(dateExpected);
  });

  it('should "changeInputDate" call "onChange" with undefined when obj its not defined or null', () => {
    spyOn(component, 'onChange');

    component.changeInputDate(undefined);

    expect(component.onChange).toHaveBeenCalledWith(undefined);
  });

  it('should "changeInputDate" call "onChange" with undefined when obj.target its not defined or null', () => {
    spyOn(component, 'onChange');

    component.changeInputDate({ target: undefined });

    expect(component.onChange).toHaveBeenCalledWith(undefined);
  });

  it('should "changeInputDate" call "onChange" with undefined when obj.target.value its not defined or null', () => {
    spyOn(component, 'onChange');

    component.changeInputDate({ target: { value: undefined } });

    expect(component.onChange).toHaveBeenCalledWith(undefined);
  });
});
