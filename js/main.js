$(document).ready(function(){
	$(".header-block-logo").click(function(){
		//$(".header-block-item-layanan").hide();
		window.location.href="MainPage.html";
 });
	$(".header-block-item-layanan").click(function(){
		//$(".header-block-item-layanan").hide();
		window.location.href="Layanan.html";
 });

	$(".header-block-item-konsultasi").click(function(){
		//$(".header-block-item-layanan").hide();
		window.location.href="PilihPsikolog.html";
 });
	$(".header-block-item-testimoni").click(function(){
		//$(".header-block-item-layanan").hide();
		window.location.href="MainPage.html#testimoni-nih";
		//$('body, html').animate({
			//scrollTop: $(".main-page-block34 ").offset().top }, 600);
 });
	$(".header-block-item-kerjasama").click(function(){
		//$(".header-block-item-layanan").hide();
		window.location.href="MainPage.html#contact-nih";
 });
	$(".header-block-item-tentang").click(function(){
		//$(".header-block-item-layanan").hide();
		window.location.href="MainPage.html#tentang-nih";
 });
	$(".header-profil-icon").click(function(){
		//$(".header-block-item-layanan").hide();
		window.location.href="userProfile.html";
 });
});