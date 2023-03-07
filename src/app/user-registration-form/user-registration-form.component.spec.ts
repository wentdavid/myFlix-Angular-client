/**
 * TestBed configuration file for testing the UserRegistrationFormComponent
 */
// Angular and third-party imports
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Component import
import { UserRegistrationFormComponent } from './user-registration-form.component';

/**
 * Describe block to group related tests for UserRegistrationFormComponent
 */
describe('UserRegistrationFormComponent', () => {
  let component: UserRegistrationFormComponent;
  let fixture: ComponentFixture<UserRegistrationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrationFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test to check if the component was created successfully
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
