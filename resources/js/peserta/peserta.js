$(function() {
	$(".content").hide().load("peserta/login").fadeIn("1000");

	function showPetunjuk() {
		$(document).on("click", ".show-petunjuk", function() {
			$(".content").hide().load("peserta/loadPetunjuk").fadeIn("1000");
		});
	}

	function showTes() {
		$(document).on('click', '.show-tes', function() {
			if ($(".agree").is(':checked'))
				$(".content").hide().load("peserta/loadUjianPeserta").fadeIn("1000");
			else alert("Mohon untuk menyetujui peraturan.")
		});
	}

	function clickAnsNav() {
		$(document).on('click', '.ans-nav', function() {
			var id = $(this).attr('value');
			alert(id);
		});
	}

	function submitLogin() {
		$(document).on('submit', 'form', function(e) {
			e.preventDefault();
			//$(".content").hide().load("peserta/loadPetunjuk").fadeIn("1000");
			var email = $("#email").val();
			var password = $("#password").val();

			$.ajax({
				url: "users/verifyLogin",
				method: "post",
				async: false,
				dataType: 'json',
				data: {
					email_address: email,
					tim_password: password
				},
				success: function(response) {
					if (response.ajax == 1) {
						alert("You are Logged In!");
						$(".content").hide().load("peserta/loadPetunjuk").fadeIn("1000");
					} else
						alert("Username or password incorrect!");
				},
				error: function() {
					alert("error with ajax");
				}
			});
		});
	}

	submitLogin();
	showTes();
	showPetunjuk();
	clickAnsNav();
});