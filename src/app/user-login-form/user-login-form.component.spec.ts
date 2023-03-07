/**
 * Importing required modules for testing UserLoginFormComponent
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

/**
 * Importing UserLoginFormComponent to be tested
 */
import { UserLoginFormComponent } from './user-login-form.component';

/**
 * Describe block to group related tests for UserLoginFormComponent
 */
describe('UserLoginFormComponent', () => {
  let component: UserLoginFormComponent;
  let fixture: ComponentFixture<UserLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLoginFormComponent ]
    })
    .compileComponents();

    /**
     * Create a fixture for the component
     */
    fixture = TestBed.createComponent(UserLoginFormComponent);
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
