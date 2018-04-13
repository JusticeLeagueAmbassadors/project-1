$(document).ready(function(){
     // Initialize Firebase
     var config = {
        apiKey: "AIzaSyANhsTqtXCqhrL8ddYAF4ub8SymJRTsgRg",
        authDomain: "week7firebaseproject.firebaseapp.com",
        databaseURL: "https://week7firebaseproject.firebaseio.com",
        projectId: "week7firebaseproject",
        storageBucket: "week7firebaseproject.appspot.com",
        messagingSenderId: "332302097897"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    
    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var isOpen = false;
    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            inputBox.focus();
            isOpen = true;
        } else {
            searchBox.removeClass('searchbox-open');
            inputBox.focusout();
            isOpen = false;
        }
    });  
    submitIcon.mouseup(function(){
        return false;
    });
    searchBox.mouseup(function(){
        return false;
    });
    $(document).mouseup(function(){
        if(isOpen == true){
            $('.searchbox-icon').css('display','block');
            submitIcon.click();
        }
    });
});
function buttonUp(){
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0){
        $('.searchbox-icon').css('display','none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display','block');
    }
}

function initMap(){
    var location = {
        lat: 37.773972,
        lng: -122.431297
    };
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 4, 
        center: location

    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
        });
    }
