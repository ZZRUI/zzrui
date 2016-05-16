	
	$("#list").on("input propertychange","input[type=text]",function(){
		var user = $("#user").val();
		var pwd = $("#pwd").val();
		var email = $("#email").val();

		if(user && pwd && email){
			$("#btn").addClass("btn2");
		}else{
			$("#btn").removeClass("btn2");
		}
	})