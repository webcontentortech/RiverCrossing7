$(document).ready(function() {
    var count = 2;
    var count1 = 0;

    $("#let").click(function() {
        if (count % 2 == 0) {
            $("#b").animate({marginLeft: "-600px"}, 5000);
            count++;
        } else if (count % 2 != 0) {
            $("#b").animate({marginLeft: "0px"}, 5000);
            count++;
        }
    });
    $("#th").click(function() {
        if (count1 <= 2) {
            if (count % 2 == 0) {
                $("#th").animate({marginLeft: "-70px"}, 500);
                count++;
            } else if (count % 2 != 0) {
                $("#th").animate({marginLeft: "0px"}, 500);
                count++;
            }
        }
        count1++;
    });
    $("#po").click(function() {
        if (count1 <= 2) {
            if (count % 2 == 0) {
                $("#po").animate({marginLeft: "-210px"}, 500);
                count++;
            } else if (count % 2 != 0) {
                $("#po").animate({marginLeft: "0px"}, 500);
                count++;
            }
        }
        count1++;
    });
    $("#redw").click(function() {
        if (count1 <= 2) {
            if (count % 2 == 0) {
                $("#redw").animate({marginLeft: "-70px"}, 500);
                count++;
            } else if (count % 2 != 0) {
                $("#redw").animate({marginLeft: "0px"}, 500);
                count++;
            }
        }
        count1++
    });
    $("#yelloww").click(function() {
        if (count1 <= 2) {
            if (count % 2 == 0) {
                $("#yelloww").animate({marginLeft: "-70px"}, 500);
                count++;
            } else if (count % 2 != 0) {
                $("#yelloww").animate({marginLeft: "0px"}, 500);
                count++;
            }
        }
        count1++;
    });
    $("#redc").click(function() {
        if (count1 <= 2) {
            if (count % 2 == 0) {
                $("#redc").animate({marginLeft: "-70px"}, 500);
                count++;
            } else if (count % 2 != 0) {
                $("#redc").animate({marginLeft: "0px"}, 500);
                count++;
            }
        }
        count1++;
    });
    $("#yellowc").click(function() {
        if (count1 <= 2) {
            if (count % 2 == 0) {
                $("#yellowc").animate({marginLeft: "-70px"}, 500);
                count++;
            } else if (count % 2 != 0) {
                $("#yellowc").animate({marginLeft: "0px"}, 500);
                count++;
            }
        }
        count1++;
    });

});