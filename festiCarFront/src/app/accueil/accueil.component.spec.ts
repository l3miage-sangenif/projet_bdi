import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AccueilComponent } from './accueil.component';
import { FestiCarService } from 'src/services/festi-car.service';
import { ShareDataService } from 'src/services/share-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ListeFestivalsComponent } from '../liste-festivals/liste-festivals.component';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  // Mock your services and dependencies
  const festiCarServiceMock = {
    getAllFestivalsFilter: jasmine.createSpy('getAllFestivalsFilter').and.returnValue(of([])),
  };

  const shareDataServiceMock = {
    updateFestivalTab: jasmine.createSpy('updateFestivalTab'),
    updateShowFestivals: jasmine.createSpy('updateShowFestivals'),
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AccueilComponent, ListeFestivalsComponent],
        imports: [RouterTestingModule],
        providers: [
          { provide: FestiCarService, useValue: festiCarServiceMock },
          { provide: ShareDataService, useValue: shareDataServiceMock },
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Add more tests as needed
});
