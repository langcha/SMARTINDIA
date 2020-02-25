/**
 * http://usejsdoc.org/
 */


function createVillage(){
	
	var villageId=$("#villageId").val();
	var villageCode=$("#villageCode").val();	
	var name=$("#name").val();		
	var pincode=$("#pincode").val();
	
	var jsonObj={id:villageId,code:villageCode,name:name,pin:pincode};		
	
	$.ajax({
           type: "POST",
           data:JSON.stringify(jsonObj),
           contentType: "application/json",
           url: baseUrl+"village/villageRegis",                                 
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
	
