const logout = document.querySelector(".user-profile-block6.layout");
logout.addEventListener('click',(function(){
		var keluar = confirm("Apakah anda ingin Logout?");
		if (keluar == true){
			window.location.href="index.html";
		}
		else{
			return keluar;
		}
	})
)

// $(document).ready(function(){
// 	$(".user-profile-medium-title2.layout1").click(function(){
// 		//$(".header-block-item-layanan").hide();
// 		//window.location.href="";
//  });
// 	$(".user-profile-medium-title2.layout2").click(function(){
// 		//$(".header-block-item-layanan").hide();
// 		window.location.href="ListPembayaran.html";
//  });
// 	$(".user-profile-medium-title2.layout3").click(function(){
// 		//$(".header-block-item-layanan").hide();
// 		window.location.href="MainPage.html#testimoni-nih";
// 		//$('body, html').animate({
// 			//scrollTop: $(".main-page-block34 ").offset().top }, 600);
//  });
// 	$(".user-profile-medium-title2.layout4").click(function(){
// 		//$(".header-block-item-layanan").hide();
// 		window.location.href="MainPage.html#contact-nih";
//  });
// 	$(".user-profile-block6.layout").click(function(){
// 		//$(".header-block-item-layanan").hide();
// 		var keluar = confirm("Apakah anda ingin Logout?");
// 		if (keluar == true){
// 			window.location.href="index.html";
// 		}
// 		else{
// 			return keluar;
// 		}
//  });
// });