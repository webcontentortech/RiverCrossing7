$(document).ready(function() {
    var count = 2;
    var personscount=0;
    $("#let").click(function() {
            console.log();
        if (count%2==0) {
            if (personscount>=1) {
                $("#b").animate({marginLeft: "-600px"}, 5000);
                console.log("s");
                count++;
            }
            } else if (count % 2 != 0) {
                $("#b").animate({marginLeft: "0px"}, 5000);
                count++;
            }
        
    });
    $("#th").click(function() {
        
            if (count % 2 == 0) {
                $("#th").animate({marginLeft: "-250px"}, 500);
                count++;
                personscount++;
                console.log(personscount);
            } else if (count % 2 != 0) {
                $("#th").animate({marginLeft: "0px"}, 500);
                count++;
                --personscount;
                console.log(personscount);
                
            
            }      
    });

    $("#po").click(function() {
       
            if (count % 2 == 0) {
                $("#po").animate({marginLeft: "-220px"}, 500);
                count++;
                personscount++;
                
            } else if (count % 2 != 0) {
                $("#po").animate({marginLeft: "0px"}, 500);
                count++;
               --personscount;
            
            }    
    });

    $("#redw").click(function() {
        
            if (count % 2 == 0) {
                $("#redw").animate({marginTop: "-350px"}, 500),$("#redw").animate({marginLeft: "-250px"}, 500);
                count++;
                personscount++;
                
            } else if (count % 2 != 0) {
                $("#redw").animate({marginLeft: "0px"}, 500),$("#redw").animate({marginTop: "+0px"}, 500);
                count++;
                --personscount;
            }
        
    });

    $("#yelloww").click(function() {
            if (count % 2 == 0) {
                $("#yelloww").animate({marginLeft: "-70px"}, 500);
                count++;
                personscount++;
            } else if (count % 2 != 0) {
                $("#yelloww").animate({marginLeft: "0px"}, 500);
                count++;
                --personscount;
            }    
    });

    $("#redc").click(function() {
            if (count % 2 == 0) {
                $("#redc").animate({marginLeft: "-70px"}, 500);
                count++;
                personscount++;
            } else if (count % 2 != 0) {
                $("#redc").animate({marginLeft: "0px"}, 500);
                count++;
                --personscount;
            }    
    });

    $("#yellowc").click(function() {
            if (count % 2 == 0) {
                $("#yellowc").animate({marginLeft: "-70px"}, 500);
                count++;
                personscount++;
            } else if (count % 2 != 0) {
                $("#yellowc").animate({marginLeft: "0px"}, 500);
                count++;
                --personscount;
            }    
    });

});