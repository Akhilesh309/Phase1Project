import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMeetingComponent } from './modify-meeting.component';

describe('ModifyMeetingComponent', () => {
  let component: ModifyMeetingComponent;
  let fixture: ComponentFixture<ModifyMeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyMeetingComponent]
    });
    fixture = TestBed.createComponent(ModifyMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
