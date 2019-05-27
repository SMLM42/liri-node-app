require("dotenv").config()
var keys = require("./keys.js");
var Spotify = require('node-spotify-api')
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require("moment")
var fs = require("fs")
var command = process.argv[2]
var input = process.argv[3]
if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        data = data.split(",");
        command = data[0]
        input = data[1]
        doStuff(command, input)
    })
} else { doStuff(command, input) }
function doStuff(command, input) {
    if (command === "concert-this") {
        var band = input
        axios.get("https://rest.bandsintown.com/artists/" + band + "/events?app_id=codingbootcamp").then(
            function (response) {
                console.log(response.data[0].venue.name);
                console.log(response.data[0].venue.city);
                var date = moment(response.data[0].datetime).format('L')
                // date = date.split("T")
                // date = date[0]
                // date = date.split("-")
                // date = (date[1] + "/" + date[2] + "/" + date[0])
                console.log(date)
            }
        ).catch(function (error) {
            if (error.response) {

                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        })
    }
    else if (command === "spotify-this-song") {
        var song = input
        if (song === undefined) {
            song = "The Sign"
        }
        spotify.search({ type: 'track', query: song }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            var data = data.tracks.items;
            data.forEach(function (data) {
                var artist = []
                for (var i in data.artists) {
                    artist.push(data.artists[i].name);
                }

                if (artist.length > 1) {
                    artist = artist.join(", ");
                } else {
                    artist = artist[0];
                }
                if (input != undefined) {
                    console.log("Song name: " + data.name)
                    console.log("Artist('s): " + artist)
                    console.log("Preview link: " + data.external_urls.spotify)
                    console.log("Album: " + data.album.name)
                    console.log("__________________________________________")
                }
                else {
                    if (data.name === "The Sign" && artist === "Ace of Base") {
                        console.log("Song name: " + data.name)
                        console.log("Artist('s): " + artist)
                        console.log("Preview link: " + data.external_urls.spotify)
                        console.log("Album: " + data.album.name)
                    }
                }
            });
        })
    }
    else if (command === "movie-this") {
        if (input != undefined) {
            var movie = input
        }
        else { movie = "Mr. Nobody" }
        axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
            function (response) {
                var title = response.data.Title
                console.log(title)
                var year = response.data.Year
                console.log(year)
                var rating = response.data.imdbRating
                console.log(rating)
                var rating2 = response.data.Ratings[1].Value
                console.log(rating2)
                var origin = response.data.Country
                console.log(origin)
                var language = response.data.Language
                console.log(language)
                var plot = response.data.Plot
                console.log(plot)
                var actors = response.data.Actors
                console.log(actors)
            }
        ).catch(function (error) {
            if (error.response) {

                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                console.log(error.request);
            } else {
                console.log("Error", error.message);
            }
            console.log(error.config);
        })
    }
    else {
        console.log("Unrecognized Command")
    }
}