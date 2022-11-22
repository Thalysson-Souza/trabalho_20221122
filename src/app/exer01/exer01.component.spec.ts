import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer01Component } from './exer01.component';

describe('Exer01Component', () => {
  let component: Exer01Component;
  let fixture: ComponentFixture<Exer01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exer01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
