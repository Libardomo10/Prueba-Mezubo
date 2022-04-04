import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRoulettesComponent } from './list-roulettes.component';

describe('ListRoulettesComponent', () => {
  let component: ListRoulettesComponent;
  let fixture: ComponentFixture<ListRoulettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRoulettesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRoulettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
