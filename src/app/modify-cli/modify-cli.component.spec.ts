import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCliComponent } from './modify-cli.component';

describe('ModifyCliComponent', () => {
  let component: ModifyCliComponent;
  let fixture: ComponentFixture<ModifyCliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyCliComponent]
    });
    fixture = TestBed.createComponent(ModifyCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
