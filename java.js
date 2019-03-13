	$(function() {
        $( "#draggable" ).draggable();
    });

	$(function() {
        $( "#draggable2" ).draggable();
    });
$( function() {
    $( "#resizable" ).resizable();
  } );
$(document).ready(function(){
  $(".drag").draggable();
  $(".drag").dblclick(function(){
    $(".drag").attr("contenteditable","true");
  });