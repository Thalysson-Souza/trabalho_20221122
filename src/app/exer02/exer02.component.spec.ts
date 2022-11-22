import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer02Component } from './exer02.component';

describe('Exer02Component', () => {
  let component: Exer02Component;
  let fixture: ComponentFixture<Exer02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer02Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exer02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
