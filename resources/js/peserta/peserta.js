$(function() {

	var optA = "HEHE"
	var optB = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	var optC = "HEHE3"
	var optD = "HEHE4"


	var a = []; //object of question and answers
	var b = []; //keeps current selected answer
	var c = [];
	var d = [];
	var e = [];

	var questionIndex = 0;

	//$(".content").hide().load("participants/loadUjianPeserta").fadeIn("1000");


	//retrieve questions in json, must be stored in array for client side
	//PLEASE DONT FORGET TO ALSO STORE IN SERVER SIDE!!!!
	function getQuestions() {
		$.ajax({
			url: "exams/getQuestions",
			method: "GET",
			dataType: "json",
			success: function(data) {
				for (i = 0; i < data.length; i++) {
					a.push(data[i]);
					b.push('');
				}
				initQuestionsLabelandCheckboxValues();
				//console.log(a);
			}
		});
	}

	function initQuestionsLabelandCheckboxValues() {
		$(".question").html("<h3>" + a[questionIndex].question + "</h3>");


		//checkbox values
		$("#a").val(a[questionIndex].opt_1);
		$("#b").val(a[questionIndex].opt_2);
		$("#c").val(a[questionIndex].opt_3);
		$("#d").val(a[questionIndex].opt_4);
		$("#e").val(a[questionIndex].opt_5);

		//questions label
		$("#lblA").text(a[questionIndex].opt_1);
		$("#lblB").text(a[questionIndex].opt_2);
		$("#lblC").text(a[questionIndex].opt_3);
		$("#lblD").text(a[questionIndex].opt_4);
		$("#lblE").text(a[questionIndex].opt_5);
	}


	function showPetunjuk() {
		$(document).on("click", ".show-petunjuk", function() {
			$(".content").hide().load("participants/loadPetunjuk").fadeIn("1000");
		});
	}

	function showTes() {
		$(document).on('click', '.show-tes', function() {
			if ($(".agree").is(':checked'))
				$(".content").hide().load("participants/loadUjianPeserta").fadeIn("1000");
			else alert("Mohon untuk menyetujui peraturan.")
		});
	}

	function clickAnsNav() {
		$(document).on('click', '.ans-nav', function() {
			var id = $(this).attr('value');
			//alert(id);

			$(".card-header").html("<strong>" + id + "</strong>")

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
				dataType: 'json',
				data: {
					email_address: email,
					tim_password: password
				},
				success: function(response) {
					if (response.ajax == 1) {
						alert("You are Logged In!");
						$(".content").hide().load("participants/loadPetunjuk").fadeIn("1000");
					} else
						alert("Username or password incorrect!");
				},
				error: function(response) {
					alert("Username or password incorrect!");

				}
			});
		});
	}

	function submitAns() {
		$(document).on('click', '#submit', function(e) {
			/*var a = $("#a").val();
			var b = $("#b").val();
			var c = $("#c").val();
			var d = $("#d").val();*/

			console.log(b);
		});
	}

	function nextQuestion() {
		$(document).on('click', '.next', function() {
			alert($("input[type='radio']:checked").val());

			if (questionIndex < a.length - 1) {
				questionIndex++;
				$(".question").html("<h4>" + a[questionIndex].question + "</h4>");

				//checkbox values
				$("#a").val(a[questionIndex].opt_1);
				$("#b").val(a[questionIndex].opt_2);
				$("#c").val(a[questionIndex].opt_3);
				$("#d").val(a[questionIndex].opt_4);
				$("#e").val(a[questionIndex].opt_5);


				$("#lblA").text(a[questionIndex].opt_1);
				$("#lblB").text(a[questionIndex].opt_2);
				$("#lblC").text(a[questionIndex].opt_3);
				$("#lblD").text(a[questionIndex].opt_4);
				$("#lblE").text(a[questionIndex].opt_5);
			} else {
				alert("Tidak ada soal lagi.")
			}

		})
	}

	function prevQuestion() {
		$(document).on('click', '.prev', function() {
			alert($("input[type='radio']:checked").val());

			if (questionIndex > 0) {

				questionIndex--;
				$(".question").html("<h3>" + a[questionIndex].question + "</h3>");

				//checkbox values
				$("#a").val(a[questionIndex].opt_1);
				$("#b").val(a[questionIndex].opt_2);
				$("#c").val(a[questionIndex].opt_3);
				$("#d").val(a[questionIndex].opt_4);
				$("#e").val(a[questionIndex].opt_5);


				$("#lblA").text(a[questionIndex].opt_1);
				$("#lblB").text(a[questionIndex].opt_2);
				$("#lblC").text(a[questionIndex].opt_3);
				$("#lblD").text(a[questionIndex].opt_4);
				$("#lblE").text(a[questionIndex].opt_5);
			}
		})
	}

	function clickAns() {
		$(document).on('click', "input[type='radio']", function() {
			b[questionIndex] = $(this).val();
			console.log(b[questionIndex]);
			//}
		});
	}

	clickAns();
	prevQuestion();
	nextQuestion();
	getQuestions();
	submitAns();
	submitLogin();
	showTes();
	showPetunjuk();
	clickAnsNav();
});