import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReadComponent } from './student-read.component';

describe('StudentReadComponent', () => {
  let component: StudentReadComponent;
  let fixture: ComponentFixture<StudentReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
