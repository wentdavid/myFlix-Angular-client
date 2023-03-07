/**
 * UserRegistrationFormComponent is a component responsible for displaying the user registration form and sending the
 * form inputs to the backend for user registration.
 */
import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  // An object that contains the form inputs
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }

ngOnInit(): void {
}

/**
 * Sends the form inputs to the backend for user registration.
 * If the registration is successful, the modal will be closed and a success notification will be displayed.
 * If the registration fails, an error notification will be displayed.
 */
registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((response) => {
     this.dialogRef.close(); 
      console.log(response);
     this.snackBar.open('user registerd successfully!', 'OK', {
        duration: 2000
     });
    }, (response) => {
      console.log(response);
      this.snackBar.open(response, 'OK', {
        duration: 2000
      });
    });
  }

  }