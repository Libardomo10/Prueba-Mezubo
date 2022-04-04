import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenRouletteComponent } from './open-roulette.component';

describe('OpenRouletteComponent', () => {
  let component: OpenRouletteComponent;
  let fixture: ComponentFixture<OpenRouletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenRouletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenRouletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
