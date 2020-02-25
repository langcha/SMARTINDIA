/**
 * http://usejsdoc.org/
 */


function createBranch(){
	
	var branchId=$("#branchId").val();
	var branchCode=$("#branchCode").val();	
	var name=$("#name").val();	
	var address=$("#address").val();
	var state=$("#state").val();
	var district=$("#district").val();
	var city=$("#city").val();
	var pincode=$("#pincode").val();
	
	var jsonObj={branchId:branchId,branchCode:branchCode,name:name,address:address,state:state,district:district,city:city,pincode:pincode};		
	
	$.ajax({
           type: "POST",
           data:JSON.stringify(jsonObj),
           contentType: "application/json",
           url: baseUrl+"branchRegis",                                 
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
	
