// function concert(artist, date, venue, image) {
//     this.artist = artist;
//     this.date = date;
//     this.venue = venue;
//     this.image = image;
//     // this.productOfPop = function() {
//     //   return this.population * this.hippies
//     //   }
//   }
// var concertArray = new Array
//
// var arianaGrande = new concert("Ariana Grande", "June 14, 2018", "Oracle Arena, Oakland", "img/arianaGrande.jpg")
// var modestMouse = new concert("Modest Mouse", "June 17, 2018", "Bill Graham Theatre, San Francisco", "img/modestMouse.jpg")
// var nickiMinaj = new concert("Nicki Minaj", "June 23, 2018", "The Fox Theatre, Oakland", "img/nickiMinaj.jpg")
// var maroonFive = new concert("Maroon Five", "July 2, 2018", "The Fillmore, San Francisco", "img/maroonFive.jpg")
// var justinBieber = new concert("Justin Bieber", "July 7, 2018", "SAP Center, San Jose", "img/justinBieber.jpg")
// var drake = new concert("Drake", "July 14, 2018", "Shoreline Amphitheatre, Montain View", "img/drake.jpg")
//
// concertArray.push(arianGrancde, modestMouse, nickiMinaj, maroonFive, justinBieber, drake);
//
//
// for(i = 0; i < concertArray.length; i++) {
//     var concertArtist = document.createTextNode(concertArray[i].artist)
//     var concertDate = document.createTextNode(concertArray[i].date)
//     var concertVenue = document.createTextNode(concertArray[i].venue)
//     var concertImg  = concertArray[i].image
//
//     var newCol = document.createElement('div');
//     var newDiv = document.createElement('div');
//     var h1name = document.createElement('h1');
//     var h4date = document.createElement('h4');
//     var h4venue = document.createElement('h4');
//     var order = document.createElement('button');
//     var image = document.createElement('img');
//
//     h1name.appendChild(concertArtist)
//     h4date.appendChild(concertDate)
//     h4venue.appendChild(concertVenue)
//     image.src = concertImg
//     image.className = "img-responsive"
//
//     newCol.className = "col-md-4"
//     newDiv.className = "concertArtist" + " thumbnail"
//     newDiv.appendChild(image)
//     newDiv.appendChild(h1name)
//     newDiv.appendChild(h4date)
//     newDiv.appendChild(h4hvenue)
//     newCol.appendChild(newDiv)
//
//
//
//     document.getElementById("concerts").appendChild(newCol)
//
// }

var events = [];

function Concert(a, b, c, d, e, f) {
  this.image = a;
  this.name = b;
  this.date = c;
  this.venue = d;
  this.city = e;
  this.price = f;

}

events.push(
  new Concert("img/theeOhSees.jpg", "Thee Oh Sees", "June 4, 2018", "The Chapel", "San Francisco", "$40.00")
)
events.push(
  new Concert("img/anaTijoux.jpg", "Ana Tijoux", "June 6, 2018", "Bimbo's 365 Club", "San Francisco", "$24.00")
)
events.push(
  new Concert("img/usGirls.jpg", "US Girls", "June 8, 2018", "Rickshaw", "San Francisco", "$35.00")
)
  events.push(
    new Concert('img/drake.jpg', "Drake", "June 14, 2018", "Oracle Arena", "Oakland", "$75.00")
  )

  events.push(
    new Concert('img/arianaGrande.jpg', "Ariana Grande", "June 20, 2018", "Bill Graham", "San Francisco", "$58.00")
  )

  events.push(
    new Concert('img/modestMouse.jpg', "Modest Mouse", "June 28, 2018", "Shoreline Amph", "Mountain View", "$45.00")
  )

  events.push(
    new Concert('img/maroonFive.jpg', "Maroon Five", "July 3, 2018", "The Fox Theatre", "Oakland", "$67.00")
  )

  events.push(
    new Concert('img/nickiMinaj.jpg', "Nicki Minaj", "July 8, 2018", "The Filmore", "San Francisco", "$80.00")

  )

  events.push(
    new Concert('img/justinBieber.jpg', "Justin Bieber", "July 14, 2018", "The Greek Amph", "Berkeley", "$51.00")
  )



  for(var i = 0; i < events.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.className = "col-12 col-md-4 text-center";
        newDiv.innerHTML =
      '<div class="item"><img src="' + events[i].image + '"><div class="item-overlay"></div></div>'
      + '<h1>' + events[i].name + '</h1>'
      + '<h3>' + events[i].date + '</h3>'
      + '<h2>' + events[i].venue + '</h2>'
      + '<h4>' + events[i].city + '</h4>'
      + '<h5>' + events[i].price + '</h5>'
      + '<button type="button">Tickets</button>';

      document.querySelector("#showtimes").appendChild(newDiv)
}
