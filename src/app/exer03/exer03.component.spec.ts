import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer03Component } from './exer03.component';

describe('Exer03Component', () => {
  let component: Exer03Component;
  let fixture: ComponentFixture<Exer03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exer03Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exer03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
