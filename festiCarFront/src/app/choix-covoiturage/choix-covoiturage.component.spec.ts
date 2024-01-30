import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixCovoiturageComponent } from './choix-covoiturage.component';

describe('ChoixCovoiturageComponent', () => {
  let component: ChoixCovoiturageComponent;
  let fixture: ComponentFixture<ChoixCovoiturageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixCovoiturageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixCovoiturageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
