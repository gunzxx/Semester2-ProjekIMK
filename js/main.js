const daftar = document.querySelector(".main-page-block561.layout");
daftar.addEventListener('click',(function(){
		var keluar = confirm("Apakah anda ingin Logout?");
		if (keluar == true){
			window.location.href="Register.html";
		}
		else{
			return keluar;
		}
	})
)
