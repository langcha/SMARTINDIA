/**
 * http://usejsdoc.org/
 */


function memberRegister(){
	
	var userType=$("#userType").val();
	var name=$("#name").val();
	var gender=$("#gender").val();
	var dob=$("#dob").val();
	var age=$("#age").val();
	var mobile=$("#mobile").val();
	var email=$("#email").val();
	var loginId=$("#loginId").val();
	var password=$("#password").val();
	var address1=$("#address1").val();
	var address2=$("#address2").val();
	var landmark=$("#landmark").val();
	var state=$("#state").val();
	var district=$("#district").val();
	var pincode=$("#pincode").val();
	var village=$("#village").val();
	var villageCode=$("#villageCode").val();
	var memberId=$("#memberId").val();
	var addressId=$("#addressId").val();

	
	var jsonObj={id:memberId,type:userType,name:name,gender:gender,dob:dob,age:age,mobile:mobile,email:email,loginId:loginId,password:password,
			     address:{id:addressId,address1:address1,address2:address2,state:state,district:district,village:village,villageCode:villageCode,landmark:landmark,pincode:pincode}
	           };		
	
	$.ajax({
           type: "POST",
           data:JSON.stringify(jsonObj),
           contentType: "application/json",
           url: baseUrl+"member/memberRegis",                                 
           dataType: "json",
           success: function (data) {
        	   $("#msg").html(data.message);
        	   $("#popup1").show();
        	 alert(JSON.stringify(data));
           },
           complete: function (jqXHR, status) { 
        	
      	  }
        }); 	
 }
	
function fetchVillage(pincode){
	$("#village").val('');
	$("#villageCode").val('');
	if(pincode!=''){
		
		$.ajax({
	           type: "GET",
	           data:{pincode:pincode},
	           contentType: "application/json",
	           url: baseUrl+"village/villageByPincode",                                 
	           dataType: "json",
	           success: function (data) {
	        	 alert(JSON.stringify(data));
	        	 var status=data.status;
	        	 if(status=='Success'){
	        	 var village=data.name;
	        	 var code=data.code;
		        	 $("#village").val(village);
		        	 $("#villageCode").val(code);
	        	 }
	        	 else{
	        		 $("#village").val('');
		        	 $("#villageCode").val('');
	        	 }
	           },
	           complete: function (jqXHR, status) { 
	        	
	      	  }
	        }); 	
		
	}
}

function login(){
	if($("#username").val()=='' || $("#password").val()==''){
		$("#msg").html("All fields are mandatory");
		$("#myModal").show();
		
	}else{
		document.getElementById("overlay").style.display = "block";
		$.ajax({
			headers:{        	           
		     "Accept":"application/json",
		     "Content-type":"application/x-www-form-urlencoded"
		    }, 
	        type: "POST",
	        data:$("#loginForm").serialize(),	       
	        url: baseUrl+"member/login",                                 
	        dataType: "json",
	        success: function (data) {	     	
	     	 var status=data.status;
		     if(status=='Success'){		     	 
		     	 localStorage.setItem("name",data.name);
		     	 localStorage.setItem("mobile",data.mobile);
		     	 localStorage.setItem("email",data.email);
		     	 localStorage.setItem("loginId",data.loginId);
		     	 localStorage.setItem("uuid",data.uuid);
		     	 localStorage.setItem("type",data.type);
		     	 localStorage.setItem("userId",data.userId);
	     	 }
	     	 else{
	     		 $("#msg").html(data.message);
	     		 $("#myModal").show();
	     	 }
	        },
	        complete: function (jqXHR, status) { 
	        	document.getElementById("overlay").style.display = "none";
	   	  }
	     }); 	
	}
}

function closePopup(popup){
	$("#"+popup).hide();
}

function logout(){	
	localStorage.clear();
	sessionStorage.clear();
	document.location.href="index.html";
}