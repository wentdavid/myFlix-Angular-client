/**
 * Importing required modules for testing ProfileComponent
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

/**
 * Importing ProfileComponent to be tested
 */
import { ProfileComponent } from './profile.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ]
    })
    .compileComponents();

    /**
     * Create a fixture for the component
     */
    fixture = TestBed.createComponent(ProfileComponent);
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