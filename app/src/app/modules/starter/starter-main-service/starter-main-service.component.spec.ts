import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterMainServiceComponent } from './starter-main-service.component';

describe('StarterMainServiceComponent', () => {
  let component: StarterMainServiceComponent;
  let fixture: ComponentFixture<StarterMainServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarterMainServiceComponent]
    });
    fixture = TestBed.createComponent(StarterMainServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
