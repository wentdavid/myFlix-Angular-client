/**
 * Imports necessary modules and the component to be tested.
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenreComponent } from './genre.component';

/**
 * Test suite for the GenreComponent class.
 */
describe('GenreComponent', () => {
  let component: GenreComponent;
  let fixture: ComponentFixture<GenreComponent>;

  /**
   * Sets up the testing environment before each test case.
   * Declares the component to be tested and creates an instance of it.
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Test case to ensure that the component is created successfully.
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
