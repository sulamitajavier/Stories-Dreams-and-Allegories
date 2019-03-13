$(document).ready(function(){
  $(".drag").draggable();
  $(".drag").dblclick(function(){
    $(".drag").attr("contenteditable","true");
  });
});

 $( function() {
    $( "#resizable" ).resizable();
  } );