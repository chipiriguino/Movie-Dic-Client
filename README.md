# Proyecto-3-Movie-Dick-Server

<h1>Movie Dick</h1>

<h3>Description</h3>
Movie dick is an application created where you can find the best movies, where as a user you can add more movies, and as a user you have the possibility of getting a random movie to watch, depending on the genre you prefer.

<h3>User Stories</h3>
404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault.
Signup: As an anon I can sign up in the platform.
Login: As a user I can login to the platform.
Logout: As a user I can logout from the platform so no one else can use it.
Add Movies As a user I can add a movies.
Edit Movies As a user I can edit a movies.
Edit your profiles As a user.
View Random Movie As a user I can to see the random movies according to their gender that you decide.
Fav Movies As a user I can add fav movies to my profile and remove this movie of my fav movies.
Search Movies As a user I can search and see the details of all movies.

<h3>Backlog</h3>
<ul>
<li>More movies</li>
<li>Link for view</li>
<li></li>
</ul>

<h1>Client / Frontend </h1>

<h3>ROUTES</h3>
<ul>
<li>"/"</li>
<li>"/signup"</li>
<li>"/login"</li>
<li>"/FAQ"</li>
<li>"/random"</li>
<li>"/myprofile"</li>
<li>"/myprofile/addmovie"</li>
<li>"/myprofile/editprofile"</li>
<li>"/myprofile/favmovies"</li>
</ul>

<h3>Components</h3>
<ul>
<li>Navbar</li>
<li>Login</li>
<li>Signup</li>
<li>My-Profile</li>
<li>Add-Movie</li>
<li>Fav-Movie</li>
<li>Random-Movie</li>
<li>Edit-profile</li>
</ul>

<h3>Services</h3>
Auth Service



<h1>Server / Backend</h1>

<h4>Models</h4>
<pre>
Users{
    name:String,
    mail:String,
    pass:String,
    repeat-pass:String,
    foto:String,
    favorites[]
}

Movies{
    id_:,
    name:String,
    director_name:String,
    genre:String,
    title_year:String,
    poster:String,
    imdb_score:String
}

Fav-movies{
    id_:,
    name:String,
    director_name:String,
    genre:String,
    title_year:String,
    poster:String,
    imdb_score:String
}
</pre>
<h3>API Endpoints (backend routes)</h3>

<h3>LINKS</h3>

<h4>Trello</h4>
<a href="https://trello.com/b/IFqK337r/movie-dick">Trello Movie Dick</a>
<h4>Git</h4>
<h4>Slides</h4>
 
