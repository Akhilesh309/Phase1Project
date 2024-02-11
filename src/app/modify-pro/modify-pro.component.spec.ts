import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProComponent } from './modify-pro.component';

describe('ModifyProComponent', () => {
  let component: ModifyProComponent;
  let fixture: ComponentFixture<ModifyProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyProComponent]
    });
    fixture = TestBed.createComponent(ModifyProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
