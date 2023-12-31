import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkboardComponent } from './workboard.component';

describe('WorkboardComponent', () => {
  let component: WorkboardComponent;
  let fixture: ComponentFixture<WorkboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkboardComponent]
    });
    fixture = TestBed.createComponent(WorkboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
