$(function (){

$(document).ready(function () { 

$(".social-causes .row .col-lg-4 .image-wrap").click(function (e){
	e.stopPropagation();
	console.log("Hare Krishna ");
	var $self = $(".social-causes .row .col-lg-4 .image-wrap").index(this);
	console.log($self);
	var $tabEq = $('body .social-causes .overlay-section .content-wrap:eq('+ $self +')');
	
	$(".social-causes .overlay-section").addClass('active');
	$($tabEq).addClass('active');  
	$("body .social-causes .overlay-section .content-wrap").not($tabEq).removeClass('active');
});

 $("span.close-btn").click(function () {
	$("body .social-causes .overlay-section").removeClass('active');
	$($tabEq).removeClass("active"); 
 });

 $(document).click(function (){
 	$("body .social-causes .overlay-section").removeClass('active');
 	$($tabEq).removeClass("active"); 
 });


});

});


