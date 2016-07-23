	var username = "";

	function send_message(message){
		var prevState = $("#display").html();

		if (prevState.length > 3){
			prevState += "<br>";
		}

		$("#display").html(prevState + "<span class='current_message'>" + "<span class='bot text-success'>ChatBot: </span>" + message + "</span>");
		$(".current_message").hide();
		$(".current_message").delay(500).fadeIn();
		$(".current_message").removeClass("current_message");
	}	


	function request_username(){
		send_message("Hello, what is your name?");
	}

	function ai(message) {
		if(username.length < 3){
			username = message;
			send_message("Hello " + username + ", how are you doing?");
		}

		if(message.indexOf("how are you") >= 0){
			send_message("I am doing well.");
		}

		if(message.indexOf("time") >= 0){
			var date = new Date();
			var h = date.getHours();
			var m = date.getMinutes();

			if(h > 12){
				h -= 12;
				send_message("The current time is: " + h + ":" + m + "pm.");
			} else{
				send_message("The current time is: " + h + ":" + m + "am.");
			}
			
		}
	}

	$(document).ready(function(){
		
		
		request_username();


		$("#textbox").keypress(function(event){
			if (event.which == 13){
				if ($("#enter").prop("checked")){
					
					$("#send").click();
					event.preventDefault();
					
				}
			}
		});

		$("#send").click(function(){

			var userName = "<span class='text-primary username'>You:  </span>"

			var newMessage = $("#textbox").val();
			$("#textbox").val("");

			var prevState = $("#display").html();

			if (prevState.length > 3){
				prevState += "<br>";
			}

			$("#display").html(prevState + userName + newMessage);

			$("#display").scrollTop($("#display").prop("scrollHeight"));

			ai(newMessage);
		});
	});