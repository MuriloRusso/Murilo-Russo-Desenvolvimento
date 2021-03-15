var whats = document.getElementById('whats');
var skype = document.getElementById('skype');



$(function(){ 
        	$('#btn-skype').click(function(){
            $('#whats').hide();
          	$('#skype').fadeIn(500);
                skype.style.display = 'flex';
        	});
     	 }); 
$(function(){ 
        	$('#btn-whats').click(function(){
            $('#skype').hide();
          	$('#whats').fadeIn(500);
                whats.style.display = 'flex';
        	});
     	 }); 
$(function(){ 
        	$('.x').click(function(){
            $('#whats').fadeOut(500)
          	$('#skype').fadeOut(500);
        	});
}); 