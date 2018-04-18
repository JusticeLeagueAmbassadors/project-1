    
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
    

    


   // This object is for keeping api keys and url's

        var query = {

            news : {
                apiKey : "apiKey=fddcbeb7b30d45e79b7d2d524b03f140",
                url : "https://newsapi.org/v2/everything?q="
            },

            country : {
                url :  "https://restcountries.eu/rest/v2/name/",
                addurl : "?fullText=true"
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


    });
    
    
   
    //call for News api
        function  newsapicall(x) {
        

            query.news.url += x.toLowerCase() + "&" + query.news.apiKey


            $.ajax({
                url: query.news.url,
                method: "GET"
            }) .then (function (result){
       
                var data = result
                console.log("News", data)

                // newscleaner(data)
                for (var i=0 ; i<=5; i++){

                    var content = data.articles[i].description
                        htmlpusher(content)
    
                }
            })

        }
          

    //call for Country Rest api

    function  countryapicall(x) {
        
        query.country.url += x.toLowerCase();

     
       
        $.ajax({
            url: query.country.url,
            method: "GET"
        }) .then (function (result){
   
            var data = result


            console.log("country", data)

       

        })

}


    function htmlpusher(content){

        //creating news container

        var newsbox = $("<div/>")

        newsbox.attr("class", "newsbox")

        //news content
        var newsboxcontent = $("<div/>")

        newsboxcontent.attr("class", "newsboxcontent")
        
        
        //news header
        var newsheader = $("<div/>")

        newsheader.attr("class", "newsheader")
        
        //news text
        var newstext = $("<div/>")

        newstext.attr("class", "newstext")

        newstext.text(content)

        

        newsboxcontent.append(newsheader, newstext)

        newsbox.append(newsboxcontent)

        $(".news-container").append(newsbox)



    }


    //as our news api is not perfect , I decided to write some code here that will not show spam news

    // function newscleaner(data){

    //     var news = [];
        


    //     console.log("datacheck",  data.articles[0].description)



    //     for (var i = 0; i <= data.articles.length; i++ ){

    //         var checkword = data.article[i].title.indexOf("Azerbaijan")

    //         console.log(checkword)

    //         if ( checkword !== -1) {


    //             console.log("Yaay!")

    //         }
        






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
    

    var apiKey = "apiKey=f02c9d53ce0c4884b75db0cc20553b56"
    
    
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



