import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cabecero } from './cabecero';

describe('Cabecero', () => {
  let component: Cabecero;
  let fixture: ComponentFixture<Cabecero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cabecero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cabecero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
