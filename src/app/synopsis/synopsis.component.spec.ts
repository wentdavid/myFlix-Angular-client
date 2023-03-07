/**
 * Importing required modules for testing SynopsisComponent
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';

/**
 * Importing SynopsisComponent to be tested
 */
import { SynopsisComponent } from './synopsis.component';

describe('SynopsisComponent', () => {
  let component: SynopsisComponent;
  let fixture: ComponentFixture<SynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynopsisComponent ]
    })
    .compileComponents();

    /**
     * Create a fixture for the component
     */
    fixture = TestBed.createComponent(SynopsisComponent);
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