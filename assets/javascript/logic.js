
    //getting country name from input
    
    $(document).on("click", "#userInput", function(){
        var userInput = $("#autocomplete").val().trim()
        
        querymaker(userInput);
    });
    
    
    function  querymaker(x) {
        
        var apiKey = "apiKey=fddcbeb7b30d45e79b7d2d524b03f140"
    
        var queryURL = "https://newsapi.org/v2/everything?q="

            queryURL += x.toLowerCase() + "&" + apiKey

            console.log(queryURL)
        call(queryURL)

 }

 function call(path) {

     $.ajax({
         url: path,
         method: "GET"
     }) .then (function (result){

         var data = result
         console.log(data)
         
     })
 }



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


    
