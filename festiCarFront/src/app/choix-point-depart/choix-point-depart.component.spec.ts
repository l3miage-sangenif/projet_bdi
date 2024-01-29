import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPointDepartComponent } from './choix-point-depart.component';

describe('ChoixPointDepartComponent', () => {
  let component: ChoixPointDepartComponent;
  let fixture: ComponentFixture<ChoixPointDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixPointDepartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixPointDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
