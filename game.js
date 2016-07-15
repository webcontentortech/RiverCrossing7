$(document).ready(function() {
    var thiefisRight = true;
    var polisRight = true;
    var redwisRight = true;
    var redcisRight = true;
    var redc2isRight = true;
    var yellowwisRight = true;
    var yellowcisRight = true;
    var yellowc2isRight = true;
    var personscount=0;
    
    $("#let").click(function() {     
        console.log(personscount);
            if ((personscount==1)||(personscount==2)) {
                $("#b").animate({marginLeft: "-400px"}, 500);
                console.log(personscount);
            } else if (personscount==0) {
                $("#b").animate({marginLeft: "0px"}, 500);
            }      
    });

    $("#th").click(function() {     
        console.log("In thief click :: ", thiefisRight);;
            if (thiefisRight) {
                console.log(thiefisRight);
                $("#th").animate({marginLeft: "-250px"}, 500);
                thiefisRight=false;
                personscount++;
                console.log(personscount);
            } else if (!thiefisRight) {
                $("#th").animate({marginLeft: "0px"}, 500);
                thiefisRight=true;
                --personscount;
                console.log(personscount);
            }      
    });

    $("#po").click(function() {       
        console.log("In polices click :: ", polisRight);;
            if (polisRight) {
                console.log(polisRight)
                $("#po").animate({marginLeft: "-220px"}, 500);
                polisRight=false;
                personscount++;
                
            } else if (!polisRight) {
                $("#po").animate({marginLeft: "0px"}, 500);
                polisRight=true;
               --personscount;
            }    
    });

    $("#redw").click(function() {
        
            if (redwisRight) {
                $("#redw").animate({marginTop: "-350px"}, 500),$("#redw").animate({marginLeft: "-250px"}, 500);
                redwisRight=false;
                personscount++;
                
            } else if (!redwisRight) {
                $("#redw").animate({marginLeft: "0px"}, 500),$("#redw").animate({marginTop: "+0px"}, 500);
                redwisRight=true;
                --personscount;
            }
    });

    $("#yelloww").click(function() {
            if (yellowwisRight) {
                $("#yelloww").animate({marginLeft: "-400px"}, 500);
                yellowwisRight=false;
                personscount++;
            } else if (!yellowwisRight) {
                $("#yelloww").animate({marginLeft: "0px"}, 500);
                yellowwisRight=true;
                --personscount;
            }    
    });

    $("#redc").click(function() {
            if (redcisRight) {
                $("#redc").animate({marginTop: "-350px"}, 500),$("#redc").animate({marginLeft: "-250px"}, 500);
                redcisRight=false;
                personscount++;
            } else if (!redcisRight) {
                $("#redc").animate({marginLeft: "0px"}, 500),$("#redc").animate({marginTop: "+0px"}, 500);
                redcisRight=true
                --personscount;
            }    
    });

    $("#redc2").click(function() {
            if (redc2isRight) {
                $("#redc2").animate({marginTop: "-350px"}, 500),$("#redc2").animate({marginLeft: "-250px"}, 500);
                redc2isRight=false;
                personscount++;
            } else if (!redc2isRight) {
                $("#redc2").animate({marginLeft: "0px"}, 500),$("#redc2").animate({marginTop: "+0px"}, 500);
                redc2isRight=true
                --personscount;
            }    
    });

    $("#yellowc").click(function() {
            if (yellowcisRight) {
                console.log(yellowcisRight);
                $("#yellowc").animate({marginLeft: "-320px"}, 500);
                yellowcisRight=false;
                personscount++;
            } else if (!yellowcisRight) {
                $("#yellowc").animate({marginLeft: "0px"}, 500);
                yellowcisRight=true;
                --personscount;
            }    
    });

    $("#yellowc2").click(function() {
            if (yellowc2isRight) {
                console.log(yellowc2isRight);
                $("#yellowc2").animate({marginTop: "-250px"}, 500),$("#yellowc2").animate({marginLeft: "-250px"}, 500);
                yellowc2isRight=false;
                personscount++;
            } else if (!yellowc2isRight) {
                $("#yellowc2").animate({marginLeft: "0px"}, 500),$("#yellowc2").animate({marginTop: "+0px"}, 500);
                yellowc2isRight=true
                --personscount;
            }    
    });

});