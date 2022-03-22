/*Incluir librerias de jquerry*/
$('.nav-item').click(function(){

    var $target = $('div.navbar-collapse');
    var $button = $("button.navbar-toggler");

    function test(){
       
        $target.removeClass("show");
    }
    if($target.hasClass('show')){
        $button.attr("aria-expanded", "false");
        $button.addClass("collapsed");
        
        setTimeout(test,325);
        
    }

});