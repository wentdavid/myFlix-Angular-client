/**
 * TestBed configuration file for testing the WelcomePageComponent
 */
// Angular and third-party imports
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Component import
import { WelcomePageComponent } from './welcome-page.component';

describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

/**
 * Checks if the WelcomePageComponent has been created
 */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
