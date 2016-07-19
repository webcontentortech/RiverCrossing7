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
    var letsclick=0;
    var isthiefinboat=false;
    var thrivercrossed=false;
    var thisleftofriver=false;
    var count=0;
    var count1=0;
    var poisleftofriver=true;
    var porivercrossed=false;
    var policeisRight=true;
    var ispoinboat=false;
    var redwisonboat=false;
    var redcisonboat=false;
    var redc2isonboat=false;
    var isyellowwonboat=false;
    var isyellowconboat=false;
    var isyellowc2onboat=false;
    var redcrivercrossed=false;


    $("#th").click(function() {     
        console.log("In thief click :: ", thiefisRight);;
        if (thiefisRight) {
        if ((personscount==0)||(personscount==1)) {
            
                console.log(thiefisRight);
                $("#th").animate({marginLeft: "-250px"}, 500);
                thiefisRight=false;
                personscount++;
                console.log(personscount);
                isthiefinboat=true;
                console.log(isthiefinboat);
            }
            } else if (!thiefisRight) {
                console.log("In thief click :: ", thiefisRight);;
                if (!thrivercrossed) {
                $("#th").animate({marginLeft: "0px"}, 500);
                thiefisRight=true;
                --personscount;
                isthiefinboat=false;
                console.log(personscount);
            }
        }
            if (count==0) {
                if (thrivercrossed) {
                console.log(thrivercrossed);
                $("#th").animate({marginLeft: "-950px"}, 500);
                thisleftofriver=true;
                count++;
                --personscount;
            }
        
            } else if (thisleftofriver) {
                if (count==1) {
                console.log(thisleftofriver);
                $("#th").animate({marginLeft: "-750px"}, 500);
                thisleftofriver=true;
                --count;
                personscount++;
                isthiefinboat=true;
            }
            }
                 
    });

    $("#po").click(function() {       
        console.log("In polices click :: ", polisRight);;
        if (polisRight) {
            if ((personscount==0)||(personscount==1)) {
            
                console.log(polisRight)
                $("#po").animate({marginLeft: "-220px"}, 500);
                polisRight=false;
                personscount++;
                console.log(personscount);
                ispoinboat=true;
                console.log(ispoinboat);
            }
            } else if (!polisRight) {
                if (count1==0) {
                $("#po").animate({marginLeft: "0px"}, 500);
                polisRight=true;
               --personscount;
               console.log(personscount);
               count1++;
               ispoinboat==false;
               console.log(ispoinboat);
           }
            }
          
    });

    $("#redw").click(function() {
        if (redwisRight) {
            if ((personscount==0)||(personscount==1)) {
        
                $("#redw").animate({marginTop: "-350px"}, 500),$("#redw").animate({marginLeft: "-250px"}, 500);
                redwisRight=false;
                personscount++;
                console.log(personscount);
                redwisonboat=true;
                console.log("redwoman",redwisonboat);
            }
        } else if (!redwisRight) {
                $("#redw").animate({marginLeft: "0px"}, 500),$("#redw").animate({marginTop: "0px"}, 500);
                redwisRight=true;
                --personscount;
                console.log(personscount);
                redwisonboat==false;
        }
        
    });

    $("#yelloww").click(function() {
            if (yellowwisRight) {
                if ((personscount==0)||(personscount==1)) {
                $("#yelloww").animate({marginLeft: "-400px"}, 500);
                yellowwisRight=false;
                personscount++;
                isyellowwonboat=true;
            }
            } else if (!yellowwisRight) {
                $("#yelloww").animate({marginLeft: "0px"}, 500);
                yellowwisRight=true;
                --personscount;
                isyellowconboat=false;
            }    
    });

    $("#redc").click(function() {
            if (redcisRight) {
                if ((personscount==0)||(personscount==1)) {
                $("#redc").animate({marginTop: "-350px"}, 500),$("#redc").animate({marginLeft: "-250px"}, 500);
                redcisRight=false;
                personscount++;
                redcisonboat=true;
                redcrivercrossed=true;
                console.log("redchild",redcisonboat)
            }
            } else if (!redcisRight) {
                $("#redc").animate({marginLeft: "0px"}, 500),$("#redc").animate({marginTop: "+0px"}, 500);
                redcisRight=true
                --personscount;
                redcisonboat==false;
            }
             
    });

    $("#redc2").click(function() {
            if (redc2isRight) {
                if ((personscount==0)||(personscount==1)) {
                $("#redc2").animate({marginTop: "-350px"}, 500),$("#redc2").animate({marginLeft: "-250px"}, 500);
                redc2isRight=false;
                personscount++;
                redc2isonboat=true;
            }
            } else if (!redc2isRight) {
                $("#redc2").animate({marginLeft: "0px"}, 500),$("#redc2").animate({marginTop: "+0px"}, 500);
                redc2isRight=true
                --personscount;
                redc2isonboat==false;
            }    
    });

    $("#yellowc").click(function() {
            if (yellowcisRight) {
                if ((personscount==0)||(personscount==1)) {
                console.log(yellowcisRight);
                $("#yellowc").animate({marginLeft: "-320px"}, 500);
                yellowcisRight=false;
                personscount++;
                isyellowconboat=true;
                }
            } else if (!yellowcisRight) {
                $("#yellowc").animate({marginLeft: "0px"}, 500);
                yellowcisRight=true;
                --personscount;
                isyellowconboat=false;
            }    
    });

    $("#yellowc2").click(function() {
            if (yellowc2isRight) {
                if ((personscount==0)||(personscount==1)) {
                console.log(yellowc2isRight);
                $("#yellowc2").animate({marginTop: "-250px"}, 500),$("#yellowc2").animate({marginLeft: "-250px"}, 500);
                yellowc2isRight=false;
                personscount++;
                isyellowc2onboat=true;
            }
            } else if (!yellowc2isRight) {
                $("#yellowc2").animate({marginLeft: "0px"}, 500),$("#yellowc2").animate({marginTop: "+0px"}, 500);
                yellowc2isRight=true
                --personscount;
                isyellowc2onboat=false;
            }    
    });
    $("#let").click(function() {  
    if (count1==0) {
        if (isthiefinboat) {
            console.log(isthiefinboat);
            if (letsclick==0) {
                console.log(letsclick==0);
                if (personscount>=1) {
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#th").animate({marginLeft: "-650px"}, { duration: 2000, queue: false });
                thrivercrossed=true;
                letsclick++;
                thrivercrossed=true;
                console.log("In let click :: ", thrivercrossed);
                count1++;

            }
        }
    }
            } else if (letsclick==1) {
                if (count1==1) {
                    console.log(letsclick==1);
                    if (isthiefinboat) {
                        console.log(isthiefinboat);
                        if (personscount>=1) {
                            console.log(personscount>=1);
                            $("#b").animate({marginLeft: "0px"}, { duration: 2000, queue: false });$("#th").animate({marginLeft: "-250px"}, { duration: 2000, queue: false });
                            --letsclick;
                            --count1;
                            thisleftofriver=false;
                            thrivercrossed=false;
                            thiefisRight=false;

                        }
                    }
                }
            }   

       if (count1==0) {
        console.log(count1==0);
        console.log("polices",ispoinboat);
        if (ispoinboat) {
            console.log(ispoinboat);
            if (letsclick==0) {
                console.log(letsclick==0);
                if (personscount>=1) {
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#po").animate({marginLeft: "-650px"}, { duration: 2000, queue: false },alert("thief killed all"));
                porivercrossed=true;
                letsclick++;
                console.log("In let click :: ", porivercrossed);
                count1++;
                }
            }
        }
        } else if (letsclick==1) {
                if (count1==1) {
                    console.log(letsclick==1);
                    if (ispoinboat) {
                        console.log(ispoinboat);
                        if (personscount>=1) {
                            console.log(personscount>=1);
                            $("#b").animate({marginLeft: "0px"}, { duration: 2000, queue: false });$("#po").animate({marginLeft: "-250px"}, { duration: 2000, queue: false });
                            --letsclick;
                            --count1;
                            poisleftofriver=false;
                            porivercrossed=false;
                            poisRight=false;

                        }
                    }
                }
            }
            if (isthiefinboat&&ispoinboat) {
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#th").animate({marginLeft: "-650px"}, { duration: 2000, queue: false }),$("#po").animate({marginLeft: "-650px"}, { duration: 2000, queue: false });
            }
            if (redwisonboat&&redcisonboat) {
                console.log(redwisonboat&&redcisonboat);
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#redw").animate({marginLeft: "-650px"}, { duration: 2000, queue: false }),$("#redc").animate({marginLeft: "-650px"}, { duration: 2000, queue: false });
                alert("yellow woman killed red child");
            }
            if (redwisonboat&&redc2isonboat) {
                console.log(redwisonboat&&redcisonboat);
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#redw").animate({marginLeft: "-650px"}, { duration: 2000, queue: false }),$("#redc2").animate({marginLeft: "-650px"}, { duration: 2000, queue: false });
                alert("yellow woman killed red child");
            }
            if (isyellowwonboat&&isyellowc2onboat) {
                console.log(isyellowwonboat&&isyellowc2onboat);
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#yelloww").animate({marginLeft: "-750px"}, { duration: 2000, queue: false }),$("#yellowc2").animate({marginLeft: "-750px"}, { duration: 2000, queue: false });
                alert("red woman killed yellow child");
            }
            if (isyellowwonboat&&isyellowconboat) {
                console.log(isyellowwonboat&&isyellowconboat);
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#yelloww").animate({marginLeft: "-750px"}, { duration: 2000, queue: false }),$("#yellowc").animate({marginLeft: "-750px"}, { duration: 2000, queue: false });
                alert("red woman killed yellow child");
            }
            if (isyellowwonboat&&redwisonboat) {
                console.log(isyellowwonboat&&isyellowconboat);
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#yelloww").animate({marginLeft: "-750px"}, { duration: 2000, queue: false }),$("#redw").animate({marginLeft: "-650px"}, { duration: 2000, queue: false });
            }
            if (isyellowc2onboat&&isyellowconboat) {
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#yellowc").animate({marginLeft: "-750px"}, { duration: 2000, queue: false }),$("#yellowc2").animate({marginLeft: "-750px"}, { duration: 2000, queue: false });
            }
            if (redcisonboat&&redc2isonboat) {
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#redc").animate({marginLeft: "-650px"}, { duration: 2000, queue: false }),$("#redc2").animate({marginLeft: "-650px"}, { duration: 2000, queue: false });
            } 
            if (redcisonboat&&isyellowconboat) {
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#yellowc").animate({marginLeft: "-750px"}, { duration: 2000, queue: false }),$("#redc").animate({marginLeft: "-750px"}, { duration: 2000, queue: false });
            }
            if (redc2isonboat&&isyellowconboat) {
                console.log(isyellowwonboat&&isyellowconboat);
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#redc2").animate({marginLeft: "-750px"}, { duration: 2000, queue: false }),$("#yellowc").animate({marginLeft: "-750px"}, { duration: 2000, queue: false });
            }
            if (redc2isonboat&&isyellowc2onboat) {
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#redc2").animate({marginLeft: "-750px"}, { duration: 2000, queue: false }),$("#yellowc2").animate({marginLeft: "-750px"}, { duration: 2000, queue: false });
            }
            if (isyellowc2onboat&&redcisonboat) {
                $("#b").animate({marginLeft: "-400px"}, { duration: 2000, queue: false });$("#yellowc2").animate({marginLeft: "-650px"}, { duration: 2000, queue: false }),$("#redc").animate({marginLeft: "-650px"}, { duration: 2000, queue: false });
            }

    });

        function startTimer(duration, display) {
            var timer = duration, minutes, seconds;
            setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
                alert("you loose");
                alert("restart");
                location.reload();

            }
        }, 1000);
        }

    window.onload = function () {
        var fiveMinutes = 60 * 1,
            display = document.querySelector("#time");
        startTimer(fiveMinutes, display);
    };

    $("#bk").click(function reset() {
        location.reload();
    })


});