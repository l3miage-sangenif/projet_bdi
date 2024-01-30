import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCovoituragesComponent } from './liste-covoiturages.component';

describe('ListeCovoituragesComponent', () => {
  let component: ListeCovoituragesComponent;
  let fixture: ComponentFixture<ListeCovoituragesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCovoituragesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeCovoituragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
