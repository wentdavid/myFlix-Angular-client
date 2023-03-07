/**
 * Importing required modules and components for MovieCardComponent
 */
import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GenreComponent } from '../genre/genre.component';
import { DirectorComponent } from '../director/director.component';
import { SynopsisComponent } from '../synopsis/synopsis.component';

/**
 * Component decorator for MovieCardComponent
 */
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  
  movies: any[]=[];
  user: any={};
  favoriteMovies: any[]=[];

  /**
   * Constructor for MovieCardComponent
   * @param fetchApiDataService service to fetch data from the API
   * @param dialog service to open dialogs
   * @param snackBar service to display snackbar notifications
   */
  constructor(
    public fetchApiDataService: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    ) {}

  /**
   * Initialize the component by calling the functions to get movies and favorite movies
   */
  ngOnInit(): void {
    this.getMovies();
    this.getFavMovies();
    
  }

  /**
   * Fetch movies via API and set movies variable to returned array of movie objects
   * @returns an array holding movie objects
   */
  getMovies(): void {
    this.fetchApiDataService.getAllMovies().subscribe((res: any)=>{
      this.movies=res;
      return this.movies;
    })
  }

  /**
   * Fetch user info via API and set favoriteMovies variable to FavoriteMovies property of the returned 
   * user object
   * @returns an array holding movieIDs
   */
  getFavMovies(): void {
    this.fetchApiDataService.getUser().subscribe((res: any)=>{
      this.favoriteMovies=res.FavoriteMovies;
      //console.log('getFavMovies():', res.FavoriteMovies);
      return this.favoriteMovies;
    })
  }

  /**
   * Opens GenreComponent as a dialog
   * @param name - name of the genre
   * @param description - description of the genre
   */
  openGenreDialog(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: {
        Name: name,
        Description: description
      }
    });
  }

  /**
   * Opens DirectorComponent as a dialog
   * @param name - name of the director
   * @param bio - bio of the director
   * @param birth - birthyear of the director
   */
  openDirectorDialog(name: string, bio: string, birth: string): void {
    this.dialog.open(DirectorComponent, {
      data: {
        Name: name,
        Bio: bio,
        Birth: birth
      }
    });
  }

  /**
   * Opens SynopsisComponent as a dialog
   * @param title - title of the movie
   * @param description - description of the movie
   */
 openSynopsisDialog(title: string, description: string): void {
    this.dialog.open(SynopsisComponent, {
      data: {
        Name: title,
        Description: description
      }
    });
  }

  /**
   * Add/remove a movie into/from the favorite movies list
   * 
   * @remarks
   * Check if the favoriteMovies variable contains the movieID, if no, make API call to add this ID into the 
   * user's FavoriteMovie property, if yes, make API call to delete this ID. Ater the API call,
   * set the favoriteMovies variable to the updated FavoriteMovies property. Open snackBar to inform.
   * 
   * @param id - movieID of the particular movie
   */
  onToggleFavMovie(id: string): void {
    if(!this.favoriteMovies.includes(id)) {
      this.fetchApiDataService.addFavoriteMovie(id).subscribe((res)=>{
        this.favoriteMovies=res.FavoriteMovies;
        this.snackBar.open('Movie added to favourites.', 'OK', {
          duration: 3000
       })
      }, (res) => {
        this.snackBar.open(res.message, 'OK', {
          duration: 4000
        });
      })
    } else {
      this.fetchApiDataService.removeFavoriteMovie(id).subscribe((res)=>{
        this.favoriteMovies=res.FavoriteMovies;
        this.snackBar.open('Movie removed from favourites.', 'OK', {
          duration: 3000
       })
      }, (res) => {
        this.snackBar.open(res.message, 'OK', {
          duration: 4000
        });
      })
    }
  }
}