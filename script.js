$(document).ready(function(){
    /**js for the index page**/
        $("#name").hide();
        $("#myPic").hide();
        $("#stack").hide();
        $("#name").fadeIn(4000);
        $("#myPic").fadeIn(4000);
        $("#stack").fadeIn(4000);
        /** Js for the about page**/
        $(".about").effect("slide",1000);
        $(".about2").hide();
        $(".about2").delay( 800 ).effect("slide",1000);
        $(".skill").hide();
        $( window ).scroll(function() {
          $(".skill").fadeIn( 1000);
          /****/

});

    });
