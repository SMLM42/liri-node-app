# liri-node-app
This app allows a user to input 1 of 4 commands into their console to receive results from 3 different sites.
In order to use this app, the user must create a file with the .env type and store their spotify api credentials within it. The format is SPOTIFY_ID="place your id here without quotes",SPOTIFY_SECRET="Place your spotify secret here without quotes" 
This is bare minimum that can be typed in console to run this app:
![Alt text](https://github.com/SMLM42/liri-node-app/blob/master/assets/images/Default.png "Default")    
The commands are: concert-this, movie-this,spotify-this-song, do-what-it-says
The commands must be typed exactly as they appear above or the user will recieve an error message. 
For the first 3 commands, the user also needs to type a search parameter after the command.

concert-this "band name here" will return concert dates for the band in question. If left blank, no results will be returned. This is what the results look like:

![Alt text](https://github.com/SMLM42/liri-node-app/blob/master/assets/images/concert-this.png "concert-this")

movie-this "movie name here" will return information about the specified movie.

![Alt text](https://github.com/SMLM42/liri-node-app/blob/master/assets/images/movie-this-search.png "movie-this")

If left blank, information about the movie "Mr. Nobody" will be shown:

![Alt text](https://github.com/SMLM42/liri-node-app/blob/master/assets/images/movie-this-default.png "movie-this-default")

spotify-this-song "search term here" will return information of the first 20 songs related to that search term. 

![Alt text](https://github.com/SMLM42/liri-node-app/blob/master/assets/images/spotify-this-song-search.png "concert-this")

If left blank, this will return only the song "The Sign" by Ace of Base.

![Alt text](https://github.com/SMLM42/liri-node-app/blob/master/assets/images/spotify-this-song-default.png "spotify-default")

do-what-it-says does not require another input, it will do whatever is typed into the file random.txt

![Alt text](https://github.com/SMLM42/liri-node-app/blob/master/assets/images/do-what-it-says.png "do-what-it-says")

In the folder assets there is a folder called images that has a screenshot of every possible command inputted into this app. 
