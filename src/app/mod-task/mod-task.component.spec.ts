import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTaskComponent } from './mod-task.component';

describe('ModTaskComponent', () => {
  let component: ModTaskComponent;
  let fixture: ComponentFixture<ModTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModTaskComponent]
    });
    fixture = TestBed.createComponent(ModTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
