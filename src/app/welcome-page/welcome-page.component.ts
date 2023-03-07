/**
 * Component for the welcome page of the Angular app
 */
// Angular and third-party imports
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// Component imports
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {
  constructor(public dialog: MatDialog) { }

  /**
   * Initializes the component and clears the localStorage
   */
  ngOnInit(): void {
    localStorage.clear();
  }

  /**
   * Opens the dialog for user registration
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
    width: '280px'
    });
  }

  /**
   * Opens the dialog for user login
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
    width: '280px'
    });
  }
}