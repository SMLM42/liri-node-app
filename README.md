# liri-node-app
This app allows a user to input 1 of 4 commands into their console to receive results from 3 different sites.
In order to use this app, the user must create a file with the .env type and store their spotify api credentials within it. The format is SPOTIFY_ID="place your id here without quotes",SPOTIFY_SECRET="Place your spotify secret here without quotes"
The commands are: concert-this, movie-this,spotify-this-song, do-what-it-says
The commands must be typed exactly as they appear above or the user will recieve an error message. 
For the first 3 commands, the user also needs to type a search parameter after the command.
concert-this "band name here" will return concert dates for the band in question. If left blank, no results will be returned.
movie-this "movie name here" will return information about the specified movie. If left blank, information about the movie "Mr. Nobody" will be shown. 
spotify-this-song "search term here" will return information of the first 20 songs related to that search term. If left blank, this will return only the song "The Sign" by Ace of Base.
do-what-it-says does not require another input, it will do whatever is typed into the file random.txt

In the folder assets there is a folder called images that has a screenshot of every possible command inputted into this app. 
