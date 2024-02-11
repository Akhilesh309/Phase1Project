import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCliComponent } from './view-all-cli.component';

describe('ViewAllCliComponent', () => {
  let component: ViewAllCliComponent;
  let fixture: ComponentFixture<ViewAllCliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllCliComponent]
    });
    fixture = TestBed.createComponent(ViewAllCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
