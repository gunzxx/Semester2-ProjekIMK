$(document).ready(function(){
	$(".pilih-psikolog-group1").click(function(){
		//$(".header-block-item-layanan").hide();
		$(this).toggleClass('pilih-psikolog-group1-clicked');
 });
	$('.pilih-psikolog-group1-clicked').click(function(){
		$(this).toggleClass('pilih-psikolog-group1');

});
	$('.pilih-psikolog-txt22.layout').click(function(){
		window.location.href='PilihJadwal.html';
});
});