$(document).ready(function() {
    var isThiefRight = true;
    var isThiefInBoat = false;
    var isBoatRight = true;
    var whoIsInBoatFirst;
    var isRight = true;

    $("#thief").click(function() {
        var thiefRightLocation = "0px";
        var thiefInBoatRightLocation = "-250px";
        var thiefInBoatLeftLocation = "-650px";
        var thiefLeftLocation = "-950px";

        if (isThiefRight && isBoatRight) {
            console.log(isThiefRight && isBoatRight);
            if (!isThiefInBoat) {
                doOnClickPersonRightNotInBoat("#thief",thiefInBoatRightLocation)
            } else {
                doOnClickPersonRightInBoat("#thief", thiefRightLocation)
            }
        }
        if (!isThiefRight && !isBoatRight) {
            if (isThiefInBoat) {
                doOnClickPersonLeftInBoat("#thief", thiefLeftLocation)
            } else {
                doOnClickPersonLeftNotInBoat("#thief", thiefInBoatLeftLocation)
            }
        }
    });
    $("#let").click(function() {
        if (isBoatRight) {
            console.log("isBoatRight", isBoatRight);
            $("#boat").animate({marginLeft: '-400px'}, {duration: 2000,queue: false});
            isBoatRight = false;
            if (whoIsInBoatFirst != "") {
                $(whoIsInBoatFirst).animate({marginLeft: '-650px'}, {duration: 2000,queue: false});
                makePersonInBoatStateChange(whoIsInBoatFirst,false);
            }
            console.log("isBoatRight", isBoatRight);
        } else {
            $("#boat").animate({marginLeft: '0px'}, {duration: 2000,queue: false});
            isBoatRight = true;
            if (whoIsInBoatFirst != "") {
                $(whoIsInBoatFirst).animate({marginLeft: '-250px'}, {duration: 2000,queue: false});
                makePersonInBoatStateChange(whoIsInBoatFirst,true);
            }
        }
    });

    function makePersonInBoatStateChange(whoIsInBoatFirst, isRight) {
        var res = whoIsInBoatFirst.replace("#", "");
        console.log("res", res);
        var thiefstring = "isThiefRight";
        var res1 = thiefstring.toLowerCase();

        if (res1.indexOf(res) != -1) {
            isThiefRight = isRight;
            console.log('makePersonInBoatStateChange :: ', isThiefRight);
        }
    };
    var doOnClickPersonRightNotInBoat = function(personId,location) {
        $(personId).animate({marginLeft: location}, 500);
        isThiefInBoat = true;
        whoIsInBoatFirst = "#thief";
        isThiefRight = true;
    };
    var doOnClickPersonRightInBoat = function(personId,location) {
        $(personId).animate({marginLeft: location}, 500);
        isThiefInBoat = false;
        whoIsInBoatFirst = "";
        isThiefRight = true;
    };
    var doOnClickPersonLeftInBoat = function(personId, location) {
        $(personId).animate({marginLeft: location}, 500);
        isThiefInBoat = false;
        whoIsInBoatFirst = "";
        isThiefRight = false;
    };
    var doOnClickPersonLeftNotInBoat = function(personId,location) {
        $(personId).animate({marginLeft: location}, 500);
        isThiefInBoat = true;
        whoIsInBoatFirst = "#thief";
        isThiefRight = false;
    };
});