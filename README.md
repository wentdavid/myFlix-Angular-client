<h1>myFlix-Angular-client</h1>
<p>This project is an Angular-based client-side application for the movie API. It provides users with the ability to browse movies, get information about their favorite movies, and manage their profiles. Feel free to test it <a href="https://wentdavid.github.io/myFlix-Angular-client/">here</a>.</p>

<p>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="https://github.com/wentdavid/myFlix-Angular-client#project-overview">Project Overview</a></li>
  <ul>
    <li><a href="https://github.com/wentdavid/myFlix-Angular-client#project-dependencies">Project Dependencies</a></li>
  </ul>
  <li><a href="https://github.com/wentdavid/myFlix-Angular-client#getting-started">Getting Started</a></li>
  <li><a href="https://github.com/wentdavid/myFlix-Angular-client#code-organization">Code Organization</a></li>
  <ul>
    <li><a href="https://github.com/wentdavid/myFlix-Angular-client#modules">Modules</a></li>
    <li><a href="https://github.com/wentdavid/myFlix-Angular-client#components">Components</a></li>
    <li><a href="https://github.com/wentdavid/myFlix-Angular-client#routes">Routes</a></li>
    <li><a href="https://github.com/wentdavid/myFlix-Angular-client#api-endpoints">API Endpoints</a></li>
    <li><a href="https://github.com/wentdavid/myFlix-Angular-client#methods">Methods</a></li>
  </ul>
  <li><a href="https://github.com/wentdavid/myFlix-Angular-client#development-server">Development Server</a></li>
  <li><a href="https://github.com/wentdavid/myFlix-Angular-client#code-scaffolding">Code Scaffolding</a></li>
  <li><a href="https://github.com/wentdavid/myFlix-Angular-client#build">Build</a></li>
  <li><a href="https://github.com/wentdavid/myFlix-Angular-client#running-unit-tests">Running Unit Tests</a></li>
  <li><a href="https://github.com/wentdavid/myFlix-Angular-client#running-end-to-end-tests">Running End-to-End Tests</a></li>
  <li><a href="https://github.com/wentdavid/myFlix-Angular-client#further-help">Further Help</a></li>
  <li><a href="https://github.com/wentdavid/myFlix-Angular-client#license">License</a></li>
</ul>

<h2>Project Overview</h2>
  <h3>Project dependencies</h3>
<ul>
  <li>Node.js</li>
  <li>Angular CLI</li>
  <li>Angular Material</li>
  <li>Angular Flex Layout</li>
  <li>TypeScript</li>
</ul>

<h3>Getting started</h3>
<ol>
  <li>Clone the repository: <code>git clone https://github.com/your-username/myFlix-Angular-client.git</code></li>
  <li>Change into the project directory: <code>cd myFlix-Angular-client</code></li>
  <li>Install dependencies: <code>npm install</code></li>
  <li>Start the development server: <code>ng serve</code></li>
</ol>
<p>The application should be visible at <code>http://localhost:4200/</code>.</p>

<h2>Code organization</h2>

<h3 id="modules">Modules</h3>
<ul>
  <li><code>AppRoutingModule</code>: handles application routing</li>
  <li><code>AppModule</code>: the root module that bootstraps the application and imports all other modules</li>
</ul>

<h3 id="components">Components</h3>
<p>This module provides the following components:</p>
<ul>
  <li><code>AppComponent</code>: The main component for the app.</li>
  <li><code>UserRegistrationFormComponent</code>: A component that provides a form for user registration.</li>
  <li><code>UserLoginFormComponent</code>: A component that provides a form for user login.</li>
  <li><code>MovieCardComponent</code>: A component that displays movie information in a card format.</li>
  <li><code>WelcomePageComponent</code>: A component that provides a welcome page for the app.</li>
  <li><code>ProfileComponent</code>: A component that displays the user's profile information.</li>
  <li><code>NavbarComponent</code>: A component that displays a navbar for the app.</li>
  <li><code>GenreComponent</code>: A component that displays movies with a specific genre.</li>
  <li><code>DirectorComponent</code>: A component that displays movies directed by a specific director.</li>
  <li><code>SynopsisComponent</code>: A component that displays the synopsis of a movie.</li>
</ul>

<h3 id="routes">Routes</h3>
<p>This module provides the following routes:</p>
<ul>
  <li><code>/welcome</code>: The welcome page for the app.</li>
  <li><code>/user</code>: The user registration page.</li>
    <li><code>/login</code>: The user login page.</li>
  <li><code>/movies</code>: The page that displays all movies.</li>
  <li><code>/profile</code>: The user's profile page.</li>
  <li><code>/genres/:name</code>: The page that displays movies with a specific genre.</li>
  <li><code>/directors/:name</code>: The page that displays movies directed by a specific director.</li>
</ul>

<h3 id="api-endpoints">API Endpoints</h3>
<p>The following API endpoints are used by this service:</p>
<ul>
  <li><code>/users</code>: User registration endpoint</li>
  <li><code>/login</code>: User login endpoint</li>
  <li><code>/movies</code>: Gets all movies from the API</li>
  <li><code>/movies/{title}</code>: Gets a movie with the given title from the API</li>
  <li><code>/movies/directors/{directorName}</code>: Gets all movies directed by the given director from the API</li>
  <li><code>/movies/genre/{genreName}</code>: Gets all movies with the given genre from the API</li>
  <li><code>/users/{username}</code>: Gets the user with the current username from the API</li>
  <li><code>/users/{username}/movies/{movieId}</code>: Adds the given movie to the favorite movies of the user with the current username</li>
  <li><code>/users/{username}/movies/{movieId}</code>: Removes the given movie from the favorite movies of the user with the current username</li>
  <li><code>/users/{username}</code>: Edits the user information of the user with the current username</li>
  <li><code>/users/{username}</code>: Deletes the user with the current username from the API</li>
</ul>

<h3 id="methods">Methods</h3>
<p>The following methods are provided by this service:</p>
<ul>
  <li><code>userRegistration(userDetails: any): Observable&lt;any&gt;</code>: Makes an API call to the user registration endpoint. userDetails: User registration details. Returns an Observable&lt;any&gt;.</li>
  <li><code>userLogin(userDetails: any): Observable&lt;any&gt;</code>: Makes an API call to the user login endpoint. userDetails: User login details. Returns an Observable&lt;any&gt;.</li>
  <li><code>getAllMovies(): Observable&lt;any&gt;</code>: Gets all movies from the API. Returns an Observable&lt;any&gt;.</li>
  <li><code>getMovie(title: string): Observable&lt;any&gt;</code>: Gets a movie with the given title from the API. title: Title of the movie to retrieve. Returns an Observable&lt;any&gt;.</li>
  <li><code>getDirector(directorName: string): Observable&lt;any&gt;</code>: Gets all movies directed by the given director from the API. directorName: Name of the director. Returns an Observable&lt;any&gt;.</li>
  <li><code>getGenre(genreName: string): Observable&lt;any&gt;</code>: Gets all movies with the given genre from the API. genreName: Name of the genre. Returns an Observable&lt;any&gt;.</li>
  <li><code>getUser(): Observable&lt;any&gt;</code>: Gets the user with the current username from the API. Returns an Observable<any>.</li>
<li><code>getFavMovies(): Observable<any></code>: Gets the favorite movies of the user with the current username from the API. Returns an Observable<any>.</li>
<li><code>addFavoriteMovie(movieId: string): Observable<any></code>: Adds the given movie to the favorite movies of the user with the current username. movieId: ID of the movie to add to favorites. Returns an Observable<any>.</li>
<li><code>removeFavoriteMovie(movieId: string): Observable<any></code>: Removes the given movie from the favorite movies of the user with the current username. movieId: ID of the movie to remove from favorites. Returns an Observable<any>.</li>
<li><code>editUser(updatedUser: any): Observable<any></code>: Edits the user information of the user with the current username. updatedUser: Updated user information. Returns an Observable<any>.</li>
<li><code>deleteUser(): Observable<any></code>: Deletes the user with the current username from the API. Returns an Observable<any>.</li>
<li><code>extractResponseData(res: any): any</code>: Extracts the response data from the API response. res: API response. Returns the response data.</li>
<li><code>handleError(error: HttpErrorResponse): any</code>: Handles API errors. error: API error. Returns an error message.</li>
</ul>
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
  
   <h2>License</h2>
<p>This project is licensed under the MIT License.</p>
