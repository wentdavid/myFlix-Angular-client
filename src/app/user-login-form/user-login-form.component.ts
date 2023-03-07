/**
 * Importing required modules and components for UserLoginFormComponent
 */
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * Component decorator for UserLoginFormComponent
 */
@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent {

  /**
   * Input decorator for login data
   */
  @Input() loginData = { Username: '', Password: ''};

  /**
   * Constructor for UserLoginFormComponent
   * @param fetchApiData service to fetch API data
   * @param dialogRef reference to the dialog used for login form
   * @param snackBar service to show snack bar messages
   * @param router service to navigate between routes
   */
constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
    ) { }

ngOnInit(): void {
}

/**
 * Method to login user by calling API service
 */
loginUser(): void {
    this.fetchApiData.userLogin (this.loginData).subscribe((response) => {
      // Set username and token in local storage
      localStorage.setItem('username', response.user.Username);
      localStorage.setItem('token', response.token);

    // Close login form dialog
     this.dialogRef.close(); 
     // Show success message using snack bar
      console.log(response);
     this.snackBar.open('user login successfull!', 'OK', {
        duration: 2000
     });
    // Navigate to movies route
     this.router.navigate(['movies']);

    }, (response) => {
      console.log(response);
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    });
  }
  }