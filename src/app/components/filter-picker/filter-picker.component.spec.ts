import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPickerComponent } from './filter-picker.component';

describe('FilterPickerComponent', () => {
  let component: FilterPickerComponent;
  let fixture: ComponentFixture<FilterPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
