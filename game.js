$(document).ready(function() {
    var thiefisRight = true;
    var polisRight = true;
    var redwisRight = true;
    var redcisRight = true;
    var redc2isRight = true;
    var yellowwisRight = true;
    var yellowcisRight = true;
    var yellowc2isRight = true;
    var personscount = 0;
    var letsclick = 0;
    var isthiefinboat = false;
    var thrivercrossed = false;
    var thisleftofriver = false;
    var count = 0;
    var count1 = 0;
    var poisleftofriver = true;
    var porivercrossed = false;
    var policeisRight = true;
    var ispoinboat = false;
    var isboatright = true;
    var isthiefleft = false;

    $("#th").click(function() {
        console.log("In thief click :: ", thiefisRight);;
        if (thiefisRight) {
            if (isboatright) {
                console.log(thiefisRight);
                $("#th").animate({marginLeft: "-250px"}, 500);
                thiefisRight = false;
                console.log(thiefisRight);
                isthiefinboat = true;
                console.log(isthiefinboat);

            }
        } else if (!thiefisRight) {
            console.log("In thief click :: ", !thiefisRight);
            if (isboatright) {
                console.log("In thief click :: ", isboatright);;
                if (!thrivercrossed) {$("#th").animate({marginLeft: "0px"}, 500);
                    thiefisRight = true;
                    isthiefinboat = false;

                }
            }
        }
        if (count == 0) {
            if (!thiefisRight) {
                console.log(!thiefisRight);
                if (!isboatright) {
                    console.log(!isboatright);
                    console.log(thrivercrossed);
                    $("#th").animate({marginLeft: "-950px"}, 500);
                    thisleftofriver = true;
                    isthiefinboat = false;
                    isthiefleft = true;
                    count++;
                }

            }

        } else if (count == 1) {
            if (!thiefisRight) {
                console.log(!thiefisRight);
                if (!isboatright) {
                    console.log(!isboatright);
                    console.log(thisleftofriver);
                    $("#th").animate({marginLeft: "-650px"}, 500);
                    thisleftofriver = true;
                    --count;
                    isthiefleft = false;
                    isthiefinboat = true;
                }
            }
        }

    });

    $("#let").click(function() {
        if (letsclick == 0) {
            if (!isthiefinboat) {
                $("#b").animate({marginLeft: '-400px'},2000);
                letsclick++;
                isboatright = false;
            }
        } else if (letsclick == 1) {
            if (!isthiefinboat) {
                $("#b").animate({marginLeft: '0px'},2000);
                --letsclick;
                isboatright = true;
            }
        }
        if (count1 == 0) {
            if (isthiefinboat) {
                console.log(isthiefinboat);
                if (letsclick == 0) {
                    console.log(letsclick == 0);
                    $("#b").animate({marginLeft: '-400px'}, {duration: 2000,queue: false});
                    $("#th").animate({marginLeft: '-650px'}, {duration: 2000,queue: false});
                    thrivercrossed = true;
                    isboatright = false;
                    letsclick++;
                    console.log("In let click :: ", thrivercrossed);
                    count1++;

                }
            }
        } else if (letsclick == 1) {
            if (count1 == 1) {
                console.log(letsclick == 1);
                if (isthiefinboat) {
                    console.log(isthiefinboat);
                    $("#b").animate({ marginLeft: '0px'}, {duration: 2000,queue: false});
                    $("#th").animate({marginLeft: '-250px'}, {duration: 2000,queue: false});
                    --letsclick;
                    --count1;
                    thisleftofriver = false;
                    thrivercrossed = false;
                    thiefisRight = false;
                    isboatright = true;


                }
            }
        }


    })
});