import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleContainerComponent } from './console-container.component';

describe('ConsoleContainerComponent', () => {
  let component: ConsoleContainerComponent;
  let fixture: ComponentFixture<ConsoleContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsoleContainerComponent]
    });
    fixture = TestBed.createComponent(ConsoleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
