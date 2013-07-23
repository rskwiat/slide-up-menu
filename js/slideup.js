$(document).ready(function(){ 


    //Full Caption Sliding (Hidden to Visible)  
    $('.boxgrid.captionfull').hover(function(){
	    var name = $(this).children().attr('alt');
	    $('.cover h3').html(name);
        $(".cover", this).stop().animate({bottom:'0'},{queue:false,duration:160});  
    }, function() {  
		name = "";
	    $('.cover h3').html(name);		
        $(".cover", this).stop().animate({
        	bottom:'-75px'},{queue:false,duration:160});
    }); 


   
});  