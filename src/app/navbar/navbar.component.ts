/**
 * Importing required modules and components for NavbarComponent
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Component decorator for NavbarComponent
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  /**
   * Constructor for NavbarComponent
   * @param router service to navigate between routes
   */
  constructor(public router: Router) {}

  /**
   * Method to log out user by clearing local storage and navigating to welcome route
   */
  logout(): void {
    this.router.navigate(['welcome']);
    localStorage.clear();
  }
}