/**
 * Imports necessary modules and dependencies for the DirectorComponent.
 */
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Defines the DirectorComponent class which displays information about a director.
 */
@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent {

  /**
   * Constructor for DirectorComponent.
   * Injects the data passed into the dialog and assigns it to a public variable.
   * The data includes the director's name, biography, and birth date.
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Name: string;
      Bio: string;
      Birth: string;
    }
  ) {}
}