import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechsCardComponent } from './techs-card.component';

describe('TechsCardComponent', () => {
  let component: TechsCardComponent;
  let fixture: ComponentFixture<TechsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechsCardComponent]
    });
    fixture = TestBed.createComponent(TechsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
