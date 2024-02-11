import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMeetingsComponent } from './view-all-meetings.component';

describe('ViewAllMeetingsComponent', () => {
  let component: ViewAllMeetingsComponent;
  let fixture: ComponentFixture<ViewAllMeetingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllMeetingsComponent]
    });
    fixture = TestBed.createComponent(ViewAllMeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
