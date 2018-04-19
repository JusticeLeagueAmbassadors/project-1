
var config = {
    apiKey: "AIzaSyDETKaOq8ZXf9ZantwXr2QqUUmD7cir1Yc",
    authDomain: "group-project1-ba977.firebaseapp.com",
    databaseURL: "https://group-project1-ba977.firebaseio.com",
    projectId: "group-project1-ba977",
    storageBucket: "",
    messagingSenderId: "715464343643"
};

firebase.initializeApp(config);

var database = firebase.database();

/*Anonymous function to hide components of the page 
when the page loads*/
$(document).ready(function() {
    $("section#countryinfo").hide();
    $("section#contactInfo").hide();
    $(".about-us-container").hide();

});


    // animated scroll-down once you click on "Who We Are"
    $(document).on("click", "#links", function(){
        $('html, body').animate({

            scrollTop: $("#aboutUs").offset().top
        }, 

        1000);
        console.log("This is running!")  
        $(".about-us-container").show();
        $(".about-us-container").scrollIntoView();
    });

   // This object is for keeping api keys and url's

   var query = {

    news : {
        apiKey : "apiKey=fddcbeb7b30d45e79b7d2d524b03f140",
        url : "https://newsapi.org/v2/everything?q="
    },

    country : {
        url :  "https://restcountries.eu/rest/v2/name/",
        addurl : "?fullText=true"
    },

    weather: {

        apiKey : "&APPID=166a433c57516f51dfab1f7edaed8413",
        url: "http://api.openweathermap.org/data/2.5/weather?q="

    }

}

$(document).on("click", "#userInput", function(){

        //userInput variable for search result

        var userInput = ""

        userInput = $("#autocomplete").val().trim()
        
        //make sure user input is not empty
        if (userInput) {
            newsapicall(userInput);
            countryapicall(userInput)
        }

        /*Anonymous function to show components of the page 
        when the page loads*/
        $("#search").val("");
        $("section#countryinfo").show();
        $("section#contactInfo").show();
        $(".about-us-container").show();
        document.getElementById("countryinfo").scrollIntoView();

    });

    //call for News api
    function  newsapicall(x) {

        //create variable to not to override our object
        var ajaxurl =   query.news.url + x.toLowerCase() + "&" + query.news.apiKey


        $.ajax({
            url: ajaxurl,
            method: "GET"
        }) .then (function (result){

            var data = result
            console.log("News", data)

                // newscleaner(data)
                for (var i=0 ; i<=2; i++){

                    var content = data.articles[i]
                    htmlpushernews(content)

                }
            })
    }


    //call for Country Rest api

    function countryapicall(x) {

       var ajaxurl = query.country.url + x.toLowerCase();


       $.ajax({
        url: ajaxurl,
        method: "GET"
    }) .then (function (result){

        var data = result

        console.log("country", data)

            //function to show data in html
            htmlpushercountryinfo(data)

            //pass city name for weather api
            weatherapicall(data[0].capital)

        })

}

    //dinamically push news
    function htmlpushernews(content){

        //creating news container

        var newsbox = $("<div/>")

        newsbox.attr("class", "newsbox")
        
        //news content
        var newsboxcontent = $("<div/>")

        newsboxcontent.attr("class", "newsboxcontent")
        
        
        //news header
        var newsheader = $("<div/>")

        newsheader.attr("class", "newsheader")

        newsheader.text(content.title)


        //news img

        var newsimg = $("<img/>")
        newsimg.attr("src", content.urlToImage)

        
        //news text
        var newstext = $("<div/>")

        newstext.attr("class", "newstext")

        newstext.text(content.description)


        newsboxcontent.append(newsheader, newsimg, newstext)

        newsbox.append(newsboxcontent)

        $(".news-container").append(newsbox)

    }

    //dinamically push country info
    function htmlpushercountryinfo(result) {


        $(".maininfo").show()

        $(".countrynameText").text("Country: " + result[0].name)


        $(".regionText").text("Region: " + result[0].region)


        $(".capitalText").text("Capital:"  + result[0].capital)


        $(".currencyText").text("Currency: " +  result[0].currencies[0].code)


        $(".languagesText").text("Languages: " +  result[0].languages[0].name)

        $(".callingCodeText").text("Calling Code: " + +  result[0].callingCodes[0])

    }


    //call for Weather Api

    function weatherapicall(city){


        var queryWeatherURL = query.weather.url + city + query.weather.apiKey;
        
        $.ajax({
          url: queryWeatherURL,
          method: "GET"
      }).done(function(response) {
        console.log(response);

        htmlpusherweather(response)
    });
  }

    //push weather info to html
    function htmlpusherweather(data){

        $(".weatherHeader").text(data.name)
        $(".weatherTemp").text(data.main.temp)
        $(".weatherPress").text(data.main.pressure)
        $(".weatherHumidity").text(data.main.humidity)
        $(".weatherWind").text(data.wind.speed)
        $(".weatherMain").text(data.weather.main)
        console.log(htmlpusherweather);

    }


    // sending contact info into firebase


    $(document).on("click", "#submit-button", function(){
        event.preventDefault();

        var firstName = $('#form_firstname').val().trim();
        var lastName = $('#form_lastname').val().trim();
        var email = $('#form_email').val().trim();
        var phone = $('#form_phone').val().trim();
        var message = $('#form_message').val().trim();

        database.ref().push({

            firstname: firstName,
            lastname: lastName,
            email: email,
            phone: phone,
            message: message
        })

        $('#form_firstname').val("");
        $('#form_lastname').val("");
        $('#form_email').val("");
        $('#form_phone').val("");
        $('#form_message').val("");

    });

    // enter will push search button

    $(document).keypress(function(e) {
        if(e.which == 13) {
           $("#userInput").click()
       }
   });


