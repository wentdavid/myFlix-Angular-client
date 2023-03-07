/**
 * Importing required modules and components for ProfileComponent
 */
import { Component, OnInit, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * Component decorator for ProfileComponent
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

/**
 * Object to hold user data
 */
  user: any={}

  /**
   * Input decorator for user update data
   */
  @Input() userUpdateData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * Constructor for ProfileComponent
   * @param fetchApiDataService service to fetch API data
   * @param snackBar service to show snack bar messages
   * @param router service to navigate between routes
   */
  constructor(
    public fetchApiDataService: FetchApiDataService,
    public snackBar: MatSnackBar,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  /**
   * Method to get user information from API service
   */
  getUserInfo(): void {
    this.fetchApiDataService.getUser().subscribe((res: any)=>{
      this.user={
        ...res,
        Birthday: new Date(res.Birthday).toLocaleDateString()
      };
      return this.user;
    })
  }

  /**
   * Method to delete user account
   */
 onDeleteAccount(username: string): void {
    if (confirm('Are you sure you want to delete your account? This action cannnot be undone.')) {
      this.router.navigate(['welcome']).then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.snackBar.open('You have successfully deleted your account!', 'OK', {
          duration: 3000
        });
      });
    }

    this.fetchApiDataService.deleteUser().subscribe(res=>{
      console.log('deleteAccountRes:', res);
    })
  } 

/**
 * Method to update user profile
 */
  onUserUpdate(): void {
    this.fetchApiDataService.editUser(this.userUpdateData).subscribe((response) => {
      localStorage.setItem('username', response.Username);
      this.snackBar.open('Your profile is updated successfully!', 'OK', {
        duration: 4000
      });
      window.location.reload();
    }, (response) => {
      this.snackBar.open(response.errors[0].msg, 'OK', {
        duration: 6000
      });
    });
  }
}