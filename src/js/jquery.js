/*Incluir librerias de jquerry*/
/*menu */
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

/*FAQ */
/*$('#buttonTest').on('show.bs.collapse', function () {
    // do something…
    alert("hello Luzz");
}) */