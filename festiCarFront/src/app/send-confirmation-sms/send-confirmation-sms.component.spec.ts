import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendConfirmationSmsComponent } from './send-confirmation-sms.component';

describe('SendConfirmationSmsComponent', () => {
  let component: SendConfirmationSmsComponent;
  let fixture: ComponentFixture<SendConfirmationSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendConfirmationSmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendConfirmationSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
