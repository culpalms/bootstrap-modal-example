// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap


$(document).ready(function()  {
  var characters = 150;
  $("#counter").append("You have <strong>"+  characters+"</strong> characters remaining");
  $("#job_comment").keyup(function(){
    if($(this).val().length > characters){
      $(this).val($(this).val().substr(0, characters));
    }
    var remaining = characters -  $(this).val().length;
    $("#counter").html("You have <strong>"+  remaining+"</strong> characters remaining");
    if(remaining <= 10)
    {
      $("#counter").css("color","red");
    }
    else
    {
      $("#counter").css("color","black");
    }
  });

  $('#new_job').submit(function(){
    var comment = $("#job_comment").val();
    if (comment==null || comment==""){    
      $(".error").html("<center>Comment can't be blank</center>").css("color","red");
      return false;
     } else {
      return true;
    }
  });

});
