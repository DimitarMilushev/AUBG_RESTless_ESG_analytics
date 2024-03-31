import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAnalysisComponent } from './personal-analysis.component';

describe('PersonalAnalysisComponent', () => {
  let component: PersonalAnalysisComponent;
  let fixture: ComponentFixture<PersonalAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
