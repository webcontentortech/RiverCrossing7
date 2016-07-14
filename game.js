$(document).ready(function() {
    var right = true;
    var personscount=0;
    $("#let").click(function() {
        console.log("letclick");
        if (right==true) {
            if(personscount>=1) {
                $("#b").animate({marginLeft: "-600px"}, 5000);
                console.log("s");
                right=false;
            }
        } else if (right==false) {
            $("#b").animate({marginLeft: "0px"}, 5000);
            right=true;
        }
    });

    $("#th").click(function() {     
            if (right) {
                console.log(right);
                $("#th").animate({marginLeft: "-250px"}, 500);
                right=false;
                personscount++;
                console.log(personscount);
            } else if (!right) {
                $("#th").animate({marginLeft: "0px"}, 500);
                right=true;
                --personscount;
                console.log(personscount); 
            }      
    });

    $("#po").click(function() {       
            if (right==true) {
                console.log(right==true)
                $("#po").animate({marginLeft: "-220px"}, 500);
                right=false;
                personscount++;
                
            } else if (right=false) {
                $("#po").animate({marginLeft: "0px"}, 500);
                right=true;
               --personscount;
            
            }    
    });

    $("#redw").click(function() {
        
            if (right==true) {
                $("#redw").animate({marginTop: "-350px"}, 500),$("#redw").animate({marginLeft: "-250px"}, 500);
                right=false;
                personscount++;
                
            } else if (right=false) {
                $("#redw").animate({marginLeft: "0px"}, 500),$("#redw").animate({marginTop: "+0px"}, 500);
                right=true;
                --personscount;
            }
        
    });

    $("#yelloww").click(function() {
            if (right==true) {
                $("#yelloww").animate({marginLeft: "-70px"}, 500);
                right=false;
                personscount++;
            } else if (right==false) {
                $("#yelloww").animate({marginLeft: "0px"}, 500);
                right=true;
                --personscount;
            }    
    });

    $("#redc").click(function() {
            if (right==true) {
                $("#redc").animate({marginLeft: "-70px"}, 500);
                right=false;
                personscount++;
            } else if (right==false) {
                $("#redc").animate({marginLeft: "0px"}, 500);
                right=true
                --personscount;
            }    
    });

    $("#yellowc").click(function() {
            if (right==true) {
                $("#yellowc").animate({marginLeft: "-70px"}, 500);
                right=false;
                personscount++;
            } else if (right==false) {
                $("#yellowc").animate({marginLeft: "0px"}, 500);
                right=true
                --personscount;
            }    
    });

});