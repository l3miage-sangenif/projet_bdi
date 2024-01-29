import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementEffectueeComponent } from './paiement-effectuee.component';

describe('PaiementEffectueeComponent', () => {
  let component: PaiementEffectueeComponent;
  let fixture: ComponentFixture<PaiementEffectueeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementEffectueeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementEffectueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
