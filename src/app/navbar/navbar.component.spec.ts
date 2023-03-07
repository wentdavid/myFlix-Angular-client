/**
 * Importing required modules for testing NavbarComponent
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

/**
 * Importing NavbarComponent to be tested
 */
import { NavbarComponent } from './navbar.component';

/**
 * Describe block to group related tests for NavbarComponent
 */
describe('NavbarComponent', () => {

  /**
   * Variables to hold the component and its fixture instance
   */
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  /**
   * Before each test, configure TestBed with the component and any dependencies
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ]
    })
    .compileComponents();

    /**
     * Create a fixture for the component
    */
    fixture = TestBed.createComponent(NavbarComponent);
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