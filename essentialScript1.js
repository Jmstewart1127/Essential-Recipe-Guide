var request;
    $(document).ready(function () {
        $("#database").submit(function (event) {
            if (request) {
              request.abort();
            }
    var $form = $(this);
    var serializedData = $form.serialize();
        request = $.ajax({
            url:'insert.php',
            type:'POST',
            data: serializedData
				
		});

		request.fail(function (jqXHR, textstatus, errorThrown){
			console.error(
			"Error: "+
			textStatus, errorThrown
			);
		});

			request.always(function () {
				$inputs.prop("disabled", false);
			});

				event.preventDefault();

	});
});

$(document).ready(function(){
	$('#database').submit(function(){
		$('#posted').slideDown("fast");
	});
});

$( document ).ready(function() {
    $('#home').click(function(){

        $.ajax({
            type:'GET',
            url: 'getHousehold.php',
            dataType: 'html',
            success: function(result){
                $('#theIngredients').html(result);
            }
        });  

    });
});

$( document ).ready(function() {
    $('#aeromatic').click(function(){

        $.ajax({
            type:'GET',
            url: 'getAeromatic.php',
            dataType: 'html',
            success: function(result){
                $('#theIngredients').html(result);
            } 
        });    

    });
});

$( document ).ready(function() {
    $('#pets').click(function(){

        $.ajax({
            type:'GET',
            url: 'getPets.php',
            dataType: 'html',
            success: function(result){
                $('#theIngredients').html(result);
            }
        });   

    });
});

$( document ).ready(function() {
    $('#skin').click(function(){

        $.ajax({
            type:'GET',
            url: 'getSkin.php',
            dataType: 'html',
            success: function(result){
                $('#theIngredients').html(result);
            } 
        });    

    });
});

$( document ).ready(function() {
    $('#spa').click(function(){

        $.ajax({
            type:'GET',
            url: 'getSpa.php',
            dataType: 'html',
            success: function(result){
                $('#theIngredients').html(result);
            } 
        });     

    });
});

$( document ).ready(function() {
    $('#searchSubmit').click(function(){

        $.ajax({
            type:'GET',
            url: 'keyword.php',
            dataType: 'html',
            success: function(result){
                $('#theRecipeName').html(result);
            } // End of success function of ajax form
        }); // End of ajax call    

    });
});

$( document ).ready(function() {
    $('#spa').click(function(){

        $.ajax({
            type:'GET',
            url: 'getSpa.php',
            dataType: 'html',
            success: function(result){
                $('#theIngredients').html(result);
            } 
        });     

    });
});

$( document ).ready(function() {
    $('#click').click(function(){

        $.ajax({
            type:'GET',
            url: 'clickDis.php',
            dataType: 'html',
            success: function(result){
                $('#theRecipeName').html(result);
            } 
        });     

    });
});

$( document ).ready(function() {
    $('#wellness').click(function(){

        $.ajax({
            type:'GET',
            url: 'getWellness.php',
            dataType: 'html',
            success: function(result){
                $('#theIngredients').html(result);
            } // End of success function of ajax form
        }); // End of ajax call    

    });
});

$(document).ready(function(){
	$('#searchbox').keyup(function(){

	if($('#searchbox').val().length === 0) {
      $('#searchSubmit').prop("disabled", true);
    }else {
      $('#searchSubmit').prop("disabled", false);
   }
	
	});
});

$(document).ready(function(){  
      $('#searchbox').keyup(function(){  
           var keyword = $(this).val();  
           if(keyword != '')  
           {  
                $.ajax({  
                     url:"testSug.php",  
                     method:"POST",  
                     data:{keyword:keyword},  
                     success:function(data)  
                     {  
                          $('#results').fadeIn();  
                          $('#results').html(data);  
                     }  
                });  
           }  
      });
	  
$(document).on('click', 'li', function(){  
    $('#searchbox').val($(this).text());  
        $('#results').fadeOut();  
    });  
});

    $(function () {
        $('#recipeName').focus(function () {
            $(this).css('text-align', 'left');
        }).blur(function () {
            $(this).css('text-align', 'center');
        });
    });
	
	$(function () {
        $('#ingredients').focus(function () {
            $(this).css('text-align', 'left');
        }).blur(function () {
            $(this).css('text-align', 'center');
        });
    });
	
	$(function () {
        $('#searchbox').focus(function () {
            $(this).css('text-align', 'left');
        }).blur(function () {
            $(this).css('text-align', 'center');
        });
    });
	
	$(document).ready(function() {
			$('html').click(function() {
				$('#results').slideUp("fast");
			});	
	});

	$(document).ready(function() {
			$('#searchSubmit').click(function() {
				$('#results').slideUp("fast");
			});	
	});	
	
$(document).ready(function() {
	$('#recipeStats').load(function(){
		$('#recipeStats').slideDown("fast");
		$('#theRecipeName').slideDown("fast");
		$('#theIngredients').slideDown("fast");
});
    $('#searchSubmit').click(function() {
    if ($('#recipeStats').is (":hidden")){
      $('#recipeStats').slideDown("fast");
	  $('#recipeStats').is(":visible");
	  }
	else {
	$('#recipeStats').slideUp("fast");
	}
 
	});
});	

    $(function () {
        $('#recipeName').focus(function () {
            $(this).css('text-align', 'left');
        }).blur(function () {
            $(this).css('text-align', 'center');
        });
    });
	
	$(function () {
        $('#ingredients').focus(function () {
            $(this).css('text-align', 'left');
        }).blur(function () {
            $(this).css('text-align', 'center');
        });
    });
	
	$(function () {
        $('#searchbox').focus(function () {
            $(this).css('text-align', 'left');
        }).blur(function () {
            $(this).css('text-align', 'center');
        });
    });

	$(document).ready(function() {
			$('html').click(function() {
				$('#results').slideUp("fast");
			});	
	});

	$(document).ready(function() {
			$('#searchSubmit').click(function() {
				$('#results').slideUp("fast");
			});	
	});	

$('#submit').click(function(){
	var message = "Recipe Submitted.";
	document.getElementById("message").innerHTML = message;
	});

	$(document).ready(function() {
			$('html').click(function() {
				$('#results').slideUp("fast");
			});	
	});
	
$(document).ready(function() {
	$('#searchSubmit').click(function() {
		$('#results').slideUp("fast");
	});	
});	
		
$(document).ready(function() {
	$('#postForm').load(function(){
		$('#postForm').slideUp("fast");
});
    $('#postButton').click(function() {
    if ($('#postForm').is (":hidden")){
      $('#postForm').slideDown("fast");
	  $('#postForm').is(":visible");
	  }
	else {
	$('#postForm').slideUp("fast");
	}
 
	});
});	

    $(function () {
        $('#recipeName').focus(function () {
            $(this).css('text-align', 'left');
        }).blur(function () {
            $(this).css('text-align', 'center');
        });
    });
	
	$(function () {
        $('#ingredients').focus(function () {
            $(this).css('text-align', 'left');
        }).blur(function () {
            $(this).css('text-align', 'center');
        });
    });
	
	$(function () {
        $('#searchbox').focus(function () {
            $(this).css('text-align', 'left');
        }).blur(function () {
            $(this).css('text-align', 'center');
        });
    });
 

$('#submit').click(function(){
	var message = "Recipe Submitted.";
	document.getElementById("message").innerHTML = message;
	});