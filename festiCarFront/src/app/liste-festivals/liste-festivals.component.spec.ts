import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFestivalsComponent } from './liste-festivals.component';

describe('ListeFestivalsComponent', () => {
  let component: ListeFestivalsComponent;
  let fixture: ComponentFixture<ListeFestivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFestivalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFestivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
