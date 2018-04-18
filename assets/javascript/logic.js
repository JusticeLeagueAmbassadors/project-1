
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
                htmlpusher(data)
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
        




    // }


    // }







 
 // Tooltip only Text
 $('.masterTooltip').hover(function(){
     // Hover over code
     var title = $(this).attr('title');
     $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
    }, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
    });
    // Tooltip only Text Ends
    
    
    
    