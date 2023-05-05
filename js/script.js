$(document).ready(function(){
    $('.moabi_manu').hide();
    
    $('.icon_bars').click(function(){
        $('.moabi_manu').slideToggle();

    });         

    window.onload = ()=>{
        // $(selector).countMe(delay,speed)
        $("#num1").countMe(40,65);
        $("#num2").countMe(30, 30);
        $("#num3").countMe(40, 50);
        $("#num4").countMe(100,200);
     }


     var $grid = $('.grid').isotope({
        // options
      });
      // filter items on button click
      $('.filter-button-group').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.filter-button-group').find('li').removeClass('active');
        $(this).addClass('active');
      });


      $("a.layer").fancybox({
        'transitionIn'	:	'elastic',
        'transitionOut'	:	'elastic',
        'speedIn'		:	600, 
        'speedOut'		:	200, 
        'overlayShow'	:	false
      });
     
});