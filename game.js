$(document).ready(function() {
    var isRight = true;
    var personscount=0;
    $("#let").click(function() {
        console.log("letclick");
        if (isRight==true) {
            if(personscount>=1) {
                $("#b").animate({marginLeft: "-600px"}, 5000);
                console.log("s");
                isRight=false;
            }
        } else if (isRight==false) {
            $("#b").animate({marginLeft: "0px"}, 5000);
            isRight=true;
        }
    });

    $("#th").click(function() {     
            if (isRight) {
                console.log(isRight);
                $("#th").animate({marginLeft: "-250px"}, 500);
                isRight=false;
                personscount++;
                console.log(personscount);
            } else if (!isRight) {
                $("#th").animate({marginLeft: "0px"}, 500);
                isRight=true;
                --personscount;
                console.log(personscount); 
            }      
    });

    $("#po").click(function() {       
            if (isRight) {
                console.log(isRight)
                $("#po").animate({marginLeft: "-220px"}, 500);
                isRight=false;
                personscount++;
                
            } else if (!isRight) {
                $("#po").animate({marginLeft: "0px"}, 500);
                isRight=true;
               --personscount;
            
            }    
    });

    $("#redw").click(function() {
        
            if (isRight) {
                $("#redw").animate({marginTop: "-350px"}, 500),$("#redw").animate({marginLeft: "-250px"}, 500);
                isRight=false;
                personscount++;
                
            } else if (!isRight) {
                $("#redw").animate({marginLeft: "0px"}, 500),$("#redw").animate({marginTop: "+0px"}, 500);
                isRight=true;
                --personscount;
            }
    });

    $("#yelloww").click(function() {
            if (isRight) {
                $("#yelloww").animate({marginLeft: "-70px"}, 500);
                isRight=false;
                personscount++;
            } else if (!isRight) {
                $("#yelloww").animate({marginLeft: "0px"}, 500);
                isRight=true;
                --personscount;
            }    
    });

    $("#redc").click(function() {
            if (isRight) {
                $("#redc").animate({marginLeft: "-70px"}, 500);
                isRight=false;
                personscount++;
            } else if (!isRight) {
                $("#redc").animate({marginLeft: "0px"}, 500);
                isRight=true
                --personscount;
            }    
    });

    $("#yellowc").click(function() {
            if (isRight) {
                $("#yellowc").animate({marginLeft: "-70px"}, 500);
                isRight=false;
                personscount++;
            } else if (!isRight) {
                $("#yellowc").animate({marginLeft: "0px"}, 500);
                isRight=true
                --personscount;
            }    
    });

});